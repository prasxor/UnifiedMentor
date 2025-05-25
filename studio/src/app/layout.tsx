import type { Metadata } from 'next';
// Remove Geist fonts
// import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster for notifications

// Remove Geist font setup
// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Nova Blogs', // Update title
  description: 'A modern blog platform.', // Update description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Remove font variables from body className */}
      {/* Add suppressHydrationWarning to body to ignore extension-injected attributes */}
      <body className={`antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="container mx-auto px-4 py-8 pt-20">{children}</main>
          <Toaster /> {/* Add Toaster for notifications */}
        </ThemeProvider>
      </body>
    </html>
  );
}
