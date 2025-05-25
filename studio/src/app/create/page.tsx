"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from "@/hooks/use-toast"; // Import useToast

// Schema for initial post details
const formSchema = z.object({
  title: z.string().min(5, { message: "Title must be at least 5 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  coverImage: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')), // Optional URL
  category: z.string().optional(), // Optional category
});

type FormData = z.infer<typeof formSchema>;

export default function CreateIntroPage() {
  const router = useRouter();
  const { toast } = useToast(); // Initialize toast
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      coverImage: '',
      category: '',
    },
  });

  // yeh function form submit hone pe chalta hai
  const onSubmit = (data: FormData) => {
    // Store initial data temporarily (e.g., localStorage or state management)
    // Phir next step pe bhej do (editor page)
    try {
        // Client-side pe localStorage use karna aasan hai temporary data ke liye
        localStorage.setItem('newBlogPostIntro', JSON.stringify(data));
        console.log("Intro data saved to localStorage:", data);
         // Editor page pe redirect karo
        router.push('/create/editor');
    } catch (error) {
        console.error("Failed to save intro data:", error);
        toast({ // Toast notification agar error aaye
            title: "Error",
            description: "Could not save post details. Please try again.",
            variant: "destructive",
        });
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Create New Blog Post - Step 1</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter blog title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Briefly describe your post" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="coverImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Image URL (Optional)</FormLabel>
                    <FormControl>
                      <Input type="url" placeholder="https://example.com/image.jpg" {...field} />
                    </FormControl>
                     <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Web Development, Travel" {...field} />
                    </FormControl>
                     <FormMessage />
                  </FormItem>
                )}
              />
               <CardFooter className="flex justify-end px-0 pt-6">
                <Button type="submit">Next: Add Content</Button>
               </CardFooter>
            </form>
          </Form>
        </CardContent>

      </Card>
    </div>
  );
}
