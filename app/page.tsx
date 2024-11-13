import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Lock, Palette, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 hover:cursor-pointer">
            <Sparkles className="h-6 w-6 text-gray-600 " />
            <span className="text-xl font-semibold">MyDiary</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/write">
              <Button variant="ghost">Нэвтрэх</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-8 bg-gradient-to-r from-primary to-gray-600 bg-clip-text text-transparent">
            Your Digital Safe Space
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Capture your thoughts, memories, and dreams in a beautiful and secure digital diary. Express yourself freely with our modern journaling platform.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Start Writing <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </Link>
          </div>
          <div className="mt-16 flex justify-center relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-b from-background to-transparent w-full h-6" />
            <Image
              src="./mars.png"
              width={1000}
              height={600}
              alt="Diary interface preview"
              className="rounded-lg shadow-2xl border object-cover"
              priority
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose MyDiary?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Private & Secure</h3>
                <p className="text-muted-foreground">
                  Your entries are encrypted and only accessible to you. We prioritize your privacy above all.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
                <p className="text-muted-foreground">
                  A clean, modern interface that makes writing a joy. Customize themes to match your style.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Features</h3>
                <p className="text-muted-foreground">
                  Tags, search, mood tracking, and more to help you organize and reflect on your journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of others who have already started documenting their lives with MyDiary.
            </p>
            <Link href="/register">
              <Button size="lg" className="gap-2">
                Create Your Diary <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Book className="h-5 w-5" />
              <span className="font-semibold">MyDiary</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MyDiary. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}