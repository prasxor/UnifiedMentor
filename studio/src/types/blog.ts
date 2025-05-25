// src/types/blog.ts

export interface BlogPost {
  id: string; // Unique identifier for the blog post
  title: string;
  description: string;
  coverImage?: string; // Optional cover image URL
  content: string; // Full blog content (can be Markdown or HTML)
  date: string; // ISO date string
  category?: string; // Optional category
  // Add other fields as needed, e.g., author, tags
}
