// src/app/blog/[slug]/page.tsx
import type { BlogPost } from "@/types/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
// Remove ReactMarkdown and remarkGfm imports
// import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
import slugify from "slugify";
import { Separator } from "@/components/ui/separator"; // Import Separator

// Function to fetch all posts (similar to home page)
async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    // Assume blogs.json is accessible server-side during build or via an API route
    const postsModule = await import("@/data/blogs.json");
    // The 'default' key might be needed depending on how JSON is imported/resolved
    return (postsModule.default || postsModule) as BlogPost[];
  } catch (error) {
    console.error("Failed to load blog posts for detail page:", error);
    return [];
  }
}

// Function to find a post by slug
async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const posts = await fetchBlogPosts();
  return posts.find(
    (post) => slugify(post.title, { lower: true, strict: true }) === slug
  );
}

// Generate static paths for blog posts
export async function generateStaticParams() {
  const posts = await fetchBlogPosts();

  return posts.map((post) => ({
    slug: slugify(post.title, { lower: true, strict: true }),
  }));
}

// Page component for individual blog post
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  // Agar post nahi mila toh 404 dikhao
  if (!post) {
    notFound();
  }

  return (
    // Use article tag for semantic structure, apply system-ui font via body class in layout
    <article className="max-w-3xl mx-auto py-8 px-4 md:px-0">
      {/* Remove outer card, apply styling directly or use simpler structure */}
      <header className="mb-8">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground leading-tight">
          {post.title}
        </h1>
        {/* Meta information */}
        <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-4">
          <span>Published on {new Date(post.date).toLocaleDateString()}</span>
          {post.category && (
            <>
              <span className="text-muted-foreground/50">|</span>
              <Badge variant="secondary">{post.category}</Badge>
            </>
          )}
        </div>
        {/* Short Description */}
        <p className="mt-4 text-lg text-foreground/80">{post.description}</p>
      </header>
      {/* Cover Image */}
      {post.coverImage && (
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-md">
          {" "}
          {/* Adjusted height, added margin, rounded corners */}
          <img
            src={post.coverImage}
            alt={post.title}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute", // mimic Image fill behavior
              top: 0,
              left: 0,
            }}
            data-ai-hint="blog post cover"
          />
        </div>
      )}
      <Separator className="my-8" /> {/* Add separator */}
      {/* Blog Content - Render HTML directly */}
      <div
        className="prose dark:prose-invert max-w-none text-foreground/90 text-base md:text-lg leading-relaxed"
        // Use dangerouslySetInnerHTML to render the HTML content from the editor
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      {/* Removed ReactMarkdown component */}
      {/*
        <div className="prose dark:prose-invert max-w-none text-foreground/90 text-base md:text-lg leading-relaxed">
             <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
             </ReactMarkdown>
        </div>
        */}
    </article>
  );
}

// Metadata generation for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Nova Blogs`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  };
}

// Install react-markdown and remark-gfm: npm install react-markdown remark-gfm (No longer needed)
// Also update tailwind.config.ts to include prose styles:
// plugins: [require('@tailwindcss/typography'), require("tailwindcss-animate")],
// Then install the typography plugin: npm install -D @tailwindcss/typography (Already done)
