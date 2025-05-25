"use client";

import type { BlogPost } from "@/types/blog";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import slugify from "slugify";

// Function to fetch blog posts (simulated for now)
async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    // In a real app, you'd fetch from an API or directly if fs is available server-side.
    // For client-side, we need an API route or handle it differently.
    // Using dynamic import for client-side fetch simulation
    const postsModule = await import("@/data/blogs.json");
    // Make sure to handle the case where the JSON file might be empty or invalid
    return (postsModule.default || []) as BlogPost[];
  } catch (error) {
    console.error("Failed to load blog posts:", error);
    // Return empty array or handle error appropriately
    return [];
  }
}

export default function Home() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      const fetchedPosts = await fetchBlogPosts();
      setPosts(fetchedPosts);
      setIsLoading(false);
    };
    loadPosts();
  }, []);

  // Get unique categories from posts
  const categories = useMemo(() => {
    const allCategories = posts.reduce((acc, post) => {
      if (post.category && !acc.includes(post.category)) {
        acc.push(post.category);
      }
      return acc;
    }, [] as string[]);
    // Sort categories alphabetically, keeping 'All Categories' at the top
    return ["All Categories", ...allCategories.sort()];
  }, [posts]);

  // Filter posts based on search term and category
  const filteredPosts = useMemo(() => {
    return posts
      .filter((post) => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        const matchesSearch =
          post.title.toLowerCase().includes(lowerSearchTerm) ||
          post.description.toLowerCase().includes(lowerSearchTerm) ||
          (post.category &&
            post.category.toLowerCase().includes(lowerSearchTerm)) ||
          (post.content &&
            post.content.toLowerCase().includes(lowerSearchTerm)); // Also search content
        const matchesCategory =
          !selectedCategory ||
          selectedCategory === "All Categories" ||
          post.category === selectedCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Sort by date descending
  }, [posts, searchTerm, selectedCategory]);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value === "All Categories" ? null : value);
  };

  // Function to generate slug
  const generateSlug = (title: string) => {
    return slugify(title || "", { lower: true, strict: true }); // Add fallback for empty title
  };

  return (
    <div className="space-y-8 animate-fade-in pt-20">
      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Input
          type="text"
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
          aria-label="Search blogs"
        />
        <Select
          onValueChange={handleCategoryChange}
          value={selectedCategory || "All Categories"}
        >
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Blog Cards Section */}
      {isLoading ? (
        <div className="flex flex-col gap-6">
          {/* Simple loading state - skeleton could be better */}
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
        </div>
      ) : filteredPosts.length > 0 ? (
        <div className="flex flex-col gap-6">
          {" "}
          {/* Changed from grid to flex column */}
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${generateSlug(post.title)}`}
              passHref
            >
              {/* Updated Card structure for landscape view */}
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col md:flex-row overflow-hidden animate-slide-up min-h-[180px] hover:scale-[1.02] group">
                {" "}
                {/* Increased min-height, added hover scale, added group for hover effect */}
                {/* Image Section */}
                {post.coverImage && (
                  <div className="relative w-full md:w-1/3 lg:w-1/4 h-48 md:h-auto flex-shrink-0 p-4">
                    {" "}
                    {/* Added padding around image */}
                    <img
                      src={post.coverImage}
                      alt={post.title || "Blog post cover"}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        position: "absolute", // mimic Image fill behavior
                        top: 0,
                        left: 0,
                      }}
                      className="rounded-lg"
                      data-ai-hint="blog cover image"
                    />
                  </div>
                )}
                {/* Content Section */}
                <div className="flex flex-col flex-grow p-4 md:p-6">
                  {" "}
                  {/* Adjust padding */}
                  <CardHeader className="p-0 mb-2">
                    {" "}
                    {/* Remove padding, add margin */}
                    <CardTitle className="text-xl lg:text-2xl line-clamp-2 group-hover:text-accent transition-colors duration-300">
                      {post.title}
                    </CardTitle>{" "}
                    {/* Title color change on hover */}
                    <CardDescription className="text-sm text-muted-foreground mt-1">
                      {new Date(post.date).toLocaleDateString()}{" "}
                      {post.category && (
                        <Badge
                          variant="secondary"
                          className="ml-2 whitespace-nowrap"
                        >
                          {post.category}
                        </Badge>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 flex-grow">
                    {" "}
                    {/* Remove padding */}
                    <p className="text-muted-foreground line-clamp-3">
                      {post.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-10">
          No blog posts found matching your criteria.
        </p>
      )}

      {/* Floating Action Button - Updated for hover effect and structure */}
      {/* Adjusted position: bottom-6 right-6, increased z-index to z-50 */}
      <Link
        href="/create"
        passHref
        className="fixed bottom-10 right-10 z-50 group"
      >
        <Button
          variant="ghost"
          className="
          w-14 h-14 rounded-full p-0
          bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500
          text-white shadow-xl
          transition-all duration-500 ease-in-out
          flex items-center justify-center
          group-hover:w-44 group-hover:px-4 group-hover:justify-evenly
        "
          aria-label="Create new blog post"
        >
          {/* Label */}
          <span
            className="
          whitespace-nowrap overflow-hidden
          opacity-0 w-0 text-sm font-medium
          transition-all duration-500 ease-in-out delay-150
          group-hover:opacity-100 group-hover:w-auto
        "
          >
            Create Blog
          </span>

          {/* Icon */}
          <Sparkles
            className="
          h-6 w-6 flex-shrink-0
          transition-transform duration-500 ease-in-out
          group-hover:ml-0 
        "
          />
        </Button>
      </Link>
    </div>
  );
}
