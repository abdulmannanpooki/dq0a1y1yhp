'use client';

import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Server, Cpu, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-background-start-rgb/20 to-background-end-rgb/50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight max-w-4xl text-foreground mb-6">
          Build Stunning Web Experiences with Next.js & Tailwind CSS
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-10">
          Create blazing fast, scalable, and beautiful websites with modern React frameworks and design systems.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="min-w-[140px]">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="min-w-[140px]">
            Learn More
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <FeatureCard
            icon={<Server className="mx-auto mb-4 h-12 w-12 text-primary" />}
            title="Server-Side Rendering"
            description="Deliver fast, SEO-friendly pages with Next.js built-in SSR capabilities."
          />
          <FeatureCard
            icon={<Cpu className="mx-auto mb-4 h-12 w-12 text-primary" />}
            title="Modern React"
            description="Leverage React 18 features and hooks for a seamless developer experience."
          />
          <FeatureCard
            icon={<ShieldCheck className="mx-auto mb-4 h-12 w-12 text-primary" />}
            title="Secure & Reliable"
            description="Built with security best practices and robust architecture for peace of mind."
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-foreground">
          Ready to start your project?
        </h2>
        <p className="text-muted-foreground mb-8">
          Join thousands of developers building with Next.js and Tailwind CSS today.
        </p>
        <Button size="lg" className="mx-auto">
          Get Started Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-auto bg-background">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2 text-foreground font-semibold text-lg">
            <Github className="h-6 w-6" />
            <span>NextLanding</span>
          </div>
          <nav className="flex space-x-6 text-muted-foreground">
            <a
              href="https://github.com/vercel/next.js"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Next.js GitHub"
              className="hover:text-foreground transition"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/nextjs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Next.js Twitter"
              className="hover:text-foreground transition"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/vercel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vercel LinkedIn"
              className="hover:text-foreground transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
      {icon}
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}
