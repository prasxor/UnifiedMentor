
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
// Removed Card imports
// import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast"; // Import useToast
import type { BlogPost } from '@/types/blog'; // Import BlogPost type
import { saveBlogPost } from '@/lib/blog-actions'; // Import server action
import slugify from 'slugify';
import { RichTextEditor } from '@/components/rich-text-editor'; // Import the new editor

// yeh component editor wala part handle karta hai
export default function EditorPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [content, setContent] = useState(''); // State for editor content (HTML)
  const [introData, setIntroData] = useState<Partial<BlogPost> | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Submission state

  // jab component load hota hai, localStorage se intro data laao
  useEffect(() => {
    try {
      const storedData = localStorage.getItem('newBlogPostIntro');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setIntroData(parsedData);
        // Load existing content if available (e.g., editing)
        // For now, assume starting fresh or load from parsedData if content was stored there previously
        // setContent(parsedData.content || '');
      } else {
        // Agar intro data nahi mila, toh shayad user ne direct access kiya, wapas bhej do
        console.warn("Intro data not found in localStorage. Redirecting...");
        toast({
            title: "Missing Details",
            description: "Please start by providing post details.",
            variant: "destructive",
        });
        router.push('/create');
      }
    } catch (error) {
      console.error("Failed to load intro data from localStorage:", error);
       toast({
            title: "Error",
            description: "Could not load previous step data. Please start over.",
            variant: "destructive",
        });
      router.push('/create');
    }
  }, [router, toast]); // dependencies add kardo


  // Yeh function 'Upload Blog' button click hone pe chalta hai
  const handlePublish = async () => {
     if (!introData || !introData.title || !introData.description) {
        toast({
            title: "Error",
            description: "Missing essential post details.",
            variant: "destructive",
        });
        return;
    }

     // Check if content is empty or just contains empty HTML tags
     const plainTextContent = content.replace(/<[^>]*>/g, '').trim();
     if (!plainTextContent) {
        toast({
            title: "Error",
            description: "Blog content cannot be empty.",
            variant: "destructive",
        });
        return;
    }

    setIsSubmitting(true); // Submission shuru

    // Naya blog post object banao
    const newPost: Omit<BlogPost, 'id'> = {
        title: introData.title,
        description: introData.description,
        coverImage: introData.coverImage || undefined, // optional hai toh check karo
        category: introData.category || undefined, // optional hai
        content: content, // editor se aaya HTML content
        date: new Date().toISOString(), // abhi ka time daal do
    };

    console.log("Attempting to save post:", newPost);

    // Server action call karke post save karo
    try {
        const result = await saveBlogPost(newPost);
        if (result.success && result.newPost) {
             toast({
                title: "Success!",
                description: "Your blog post has been published.",
            });
            // localStorage se temporary data hata do
            localStorage.removeItem('newBlogPostIntro');
            // Blog detail page pe redirect karo
            const slug = slugify(result.newPost.title, { lower: true, strict: true });
            router.push(`/blog/${slug}`);
        } else {
            throw new Error(result.error || "Failed to save post.");
        }

    } catch (error: any) {
        console.error("Failed to save blog post:", error);
        toast({
            title: "Error Publishing Post",
            description: error.message || "Could not publish your blog post. Please try again.",
            variant: "destructive",
        });
    } finally {
         setIsSubmitting(false); // Submission khatam
    }

  };

  // Agar intro data load ho raha hai ya nahi mila toh loading dikhao
   if (!introData) {
     return <p>Loading editor...</p>;
   }


  return (
    // Removed Card, adjusted layout for more space, added space-y-6
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header Section */}
        <div>
            <h1 className="text-2xl font-bold">Create New Blog Post - Step 2: Content</h1>
            <p className="text-muted-foreground">Write your blog post content below.</p>
        </div>

        {/* Rich Text Editor Section */}
        <RichTextEditor
            content={content}
            onChange={setContent}
            placeholder="Start writing your amazing blog post here..."
            className="min-h-[60vh]" // Set minimum height for the editor wrapper
        />

         {/* Footer Section */}
         <div className="flex justify-between pt-4 border-t"> {/* Add border-top for separation */}
            <Button variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Back</Button>
            <Button onClick={handlePublish} disabled={isSubmitting}>
                {isSubmitting ? "Publishing..." : "Publish Blog"}
            </Button>
         </div>
    </div>
  );
}

