'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MessageCircle, Shield, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { User } from 'firebase/auth'
interface LandingPageProps {
  currentUser: User | null;
}

export default function LandingPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] pointer-events-none" />
      
      <header className="container mx-auto px-4 py-6 flex justify-between items-center sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <motion.div 
          className="flex items-center space-x-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MessageCircle className="w-8 h-8 text-pink-500" />
          <span className="text-2xl font-bold">memory</span>
        </motion.div>
        <nav className="hidden md:flex space-x-6">
          {['Features', 'About', 'Contact'].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`#${item.toLowerCase()}`} className="relative group">
                <span className="text-lg font-medium text-foreground/70 transition-colors group-hover:text-pink-500">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}

        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <MessageCircle className="w-12 h-12 text-pink-500 mr-4" />
                <h1 className="text-6xl font-bold tracking-tight">memory</h1>
              </div>
              <p className="text-3xl text-muted-foreground mb-8">
                the <span className="text-pink-500 font-semibold">good</span> chat app
              </p>
              <p className="text-lg text-muted-foreground max-w-md">
                Experience meaningful conversations in a safe, positive environment. No cameras, just genuine connections.
              </p>
            </motion.div>

            <motion.div
              className="flex-1 w-full max-w-md"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             <Card className="p-6 shadow-lg">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Username</Label>
                    <Input
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="transition-all focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="transition-all focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold tracking-wide">
                    Log in
                  </Button>
                </form>
                <div className="mt-4 text-center text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <a href="#" className="text-pink-500 hover:underline font-medium">
                    Sign up
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="features" className="bg-muted/50 py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Bad Company</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: MessageCircle, title: 'Positive Interactions', description: 'Foster meaningful conversations in a supportive environment.' },
                { icon: Shield, title: 'Enhanced Privacy', description: 'No cameras or intrusive features. Your safety is our priority.' },
                { icon: Zap, title: 'Seamless Experience', description: 'Intuitive interface for smooth, enjoyable chatting.' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative z-10"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="w-12 h-12 text-pink-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        </section>
      </main>

      <footer className="bg-muted/30 py-12 relative">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2023 memory Chat App. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            {['Privacy Policy', 'Terms of Service', 'Contact Us'].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href="#" className="text-muted-foreground hover:text-pink-500 transition-colors">
                  {item}
                </Link>
              </motion.span>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] pointer-events-none" />
      </footer>
    </div>
  )
}