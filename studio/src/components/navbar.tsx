// "use client"

// import Link from "next/link"
// import { useTheme } from "next-themes"
// import { Moon, Sun } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export function Navbar() {
//   const { theme, setTheme } = useTheme()

//   return (
//     <header className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none">
//       <div className="
//         pointer-events-auto
//         flex items-center justify-between
//         w-[95%] max-w-6xl
//         px-6 py-3
//         rounded-full
//         bg-background/60 backdrop-blur-md
//         shadow-lg border border-border
//       ">
//         {/* Left - Logo */}
//         <Link href="/" className="flex items-center space-x-2">
//           {/* <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className="text-primary"
//           >
//             <path
//               d="M6 3L12 15L18 3"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M6 21L12 9L18 21"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg> */}
          
//           <span className="text-lg font-semibold tracking-wide">NOVA</span>
//         </Link>

//         {/* Center - Nav Links */}
//         <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted-foreground">
//           <Link href="/" className="hover:text-foreground transition-colors">
//             Home
//           </Link>
//           <Link href="/create" className="hover:text-foreground transition-colors">
//             Create Blog
//           </Link>
//           <Link href="/Aboutme" className="hover:text-foreground transition-colors">
//             About me
//           </Link>
//         </nav>

//         {/* Right - Theme Toggle */}
//         <div className="flex items-center">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//             aria-label="Toggle theme"
//             className="relative"
//           >
//             <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//             <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//             <span className="sr-only">Toggle theme</span>
//           </Button>
//         </div>
//       </div>
//     </header>
//   )
// }



'use client'

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="
        pointer-events-auto
        flex items-center justify-between
        w-[95%] max-w-6xl
        px-6 py-3
        rounded-full
        bg-background/60 backdrop-blur-md
        shadow-lg border border-border
      ">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-semibold tracking-wide">NOVA</span>
        </Link>

        {/* Center - Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/create" className="hover:text-foreground transition-colors">
            Create Blog
          </Link>
          <Link href="/Aboutme" className="hover:text-foreground transition-colors">
            About me
          </Link>
        </nav>

        {/* Right - Theme toggle + Hamburger */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
            className="relative"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Hamburger Menu (Mobile only) */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[72px] w-[90%] max-w-6xl bg-background/80 backdrop-blur-md rounded-xl shadow-md p-4 border border-border md:hidden">
          <nav className="flex flex-col space-y-4 text-sm font-medium text-muted-foreground">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/create" onClick={() => setIsMenuOpen(false)} className="hover:text-foreground transition-colors">
              Create Blog
            </Link>
            <Link href="/Aboutme" onClick={() => setIsMenuOpen(false)} className="hover:text-foreground transition-colors">
              About me
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
