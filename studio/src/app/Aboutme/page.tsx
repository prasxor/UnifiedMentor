"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const { theme } = useTheme()

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          max-w-3xl w-full
          bg-background/60 backdrop-blur-md
          rounded-2xl shadow-xl border border-border
          px-8 py-10 space-y-8
        "
      >
        {/* Title */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">About NOVA</h1>
          <p className="text-muted-foreground mt-2">
            A modern blog platform built for creators, developers, and thinkers.
          </p>
        </div>

        {/* Description */}
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            NOVA Blog is a thoughtfully crafted space for expression — clean design, responsive experience, and intuitive flow.
          </p>
          <p>
            This platform is powered by cutting-edge tools like <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, with smooth animations and full theme support. Whether you’re here to share or explore, NOVA brings simplicity and creativity together.
          </p>
        </div>

        {/* Team Section */}
        <div className="pt-6 border-t border-border">
          <h2 className="text-xl font-semibold mb-4">Team</h2>
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold text-background shadow-lg">
              <img className="rounded-full" src="https://i.ibb.co/xqqQghhD/IMG-20231113-203845-180.jpg" alt="" />
            </div>
            <div>
              <p className="font-medium text-foreground">Prashant Kumar Sinha</p>
              <p className="text-sm text-muted-foreground">@Prasxor — Developer & Creator</p>
              <div className="flex gap-4 mt-2">
                <Link
                  href="https://github.com/prasxor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/prasxor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-border text-sm text-muted-foreground">
          Made with 💖 by the NOVA team — Powered by creativity and coffee ☕
        </div>
      </motion.div>
    </main>
  )
}
