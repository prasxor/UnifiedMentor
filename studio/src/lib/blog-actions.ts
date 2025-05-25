"use server"; // Mark this file as server-side only

import fs from 'fs/promises'; // Use fs.promises for async file operations
import path from 'path';
import type { BlogPost } from '@/types/blog';

// JSON file ka path define kar diya
const dataFilePath = path.join(process.cwd(), 'src', 'data', 'blogs.json');

// Function to read blog posts from JSON file
async function readBlogPosts(): Promise<BlogPost[]> {
  try {
    const jsonData = await fs.readFile(dataFilePath, 'utf-8');
    // Check if the file is empty or just whitespace
    if (!jsonData.trim()) {
        return []; // Return empty array if file is empty
    }
    return JSON.parse(jsonData) as BlogPost[];
  } catch (error: any) {
    // Agar file nahi mili (ENOENT), toh empty array return karo, file baad mein ban jayegi
    if (error.code === 'ENOENT') {
      console.log("blogs.json not found, returning empty array.");
      return [];
    }
    // Baki errors ke liye, log karo aur rethrow karo
    console.error("Error reading blog posts:", error);
    throw new Error("Could not read blog posts data.");
  }
}

// Function to write blog posts to JSON file
async function writeBlogPosts(posts: BlogPost[]): Promise<void> {
  try {
    const jsonData = JSON.stringify(posts, null, 2); // Pretty print JSON
    await fs.writeFile(dataFilePath, jsonData, 'utf-8');
     console.log("Successfully wrote to blogs.json");
  } catch (error) {
    console.error("Error writing blog posts:", error);
    throw new Error("Could not save blog posts data.");
  }
}

// Server Action: Naya blog post save karne ke liye
export async function saveBlogPost(newPostData: Omit<BlogPost, 'id'>): Promise<{ success: boolean; error?: string; newPost?: BlogPost }> {
  console.log("saveBlogPost server action called with data:", newPostData);
  try {
    const posts = await readBlogPosts();

    // Simple ID generation (better approach needed for production)
    // Sabse bade existing ID ko find karo aur 1 add karo
    const maxId = posts.reduce((max, post) => Math.max(max, parseInt(post.id) || 0), 0);
    const newId = (maxId + 1).toString();


    const newPost: BlogPost = {
      ...newPostData,
      id: newId,
      date: newPostData.date || new Date().toISOString(), // Ensure date is set
    };

    console.log("Generated new post object:", newPost);

    // Naye post ko array mein add karo
    const updatedPosts = [...posts, newPost];

    // Updated array ko JSON file mein write karo
    await writeBlogPosts(updatedPosts);

    console.log("Post saved successfully with ID:", newId);
    return { success: true, newPost: newPost }; // Return the newly created post
  } catch (error: any) {
     console.error("Server action failed:", error);
     // error.message ko return karo taki client ko specific error pata chale
    return { success: false, error: error.message || "An unknown error occurred while saving the post." };
  }
}

// Note: File system operations (`fs`) sirf server environment mein kaam karte hain.
// Isliye yeh function server component ya server action mein hi use ho sakta hai.
// Make sure `blogs.json` file writeable ho server process ke dwara.
