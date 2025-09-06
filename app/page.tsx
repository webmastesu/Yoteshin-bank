"use client"

import Link from "next/link"
import {
  Menu,
  X,
  Play,
  Download,
  Smartphone,
  Monitor,
  MessageSquare,
  Send,
  Phone,
  Wifi,
  Video,
  Apple,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactPopupOpen, setContactPopupOpen] = useState(false)

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 -z-10">
        {/* Main radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, #2d4663 0%, #1a2b42 50%, #0a1628 100%)",
          }}
        />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3Cfilter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Enhanced Space Animation Video Background */}
      <div className="fixed inset-0 -z-5">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-70"
          style={{
            filter: "brightness(0.8) contrast(1.2) saturate(1.1)",
          }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Space-BjlPAfapX976c44BSkWOSKcQOf4YJZ.mp4" type="video/mp4" />
        </video>

        <div className="md:hidden absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
              `,
              animation: "float 6s ease-in-out infinite",
            }}
          />
        </div>

        {/* Dynamic overlay that pulses with the animation */}
        <div
          className="absolute inset-0 animate-pulse hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(45, 70, 99, 0.2) 0%, rgba(26, 43, 66, 0.4) 50%, rgba(10, 22, 40, 0.6) 100%)",
            animationDuration: "4s",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 py-4">
        <div
          className="absolute inset-0 bg-black/50 md:bg-black/40 md:backdrop-blur-md border-b border-white/10 will-change-transform"
          style={{ transform: "translate3d(0, 0, 0)" }}
        />

        <div className="relative flex items-center justify-between">
          <Link href="/" className="text-white font-semibold text-xl">
            Yoteshin Bank
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Features
            </Link>
            <Link href="#devices" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Devices
            </Link>
            <Link href="#contact" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              className="bg-black/60 hover:bg-black/70 md:bg-black/50 md:hover:bg-black/60 md:backdrop-blur-sm border border-white/30 hover:border-white/40 text-white transition-all duration-300 hover:-translate-y-0.5 px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl will-change-transform"
              size="sm"
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => document.getElementById("devices")?.scrollIntoView({ behavior: "smooth" })}
            >
              Download Now
              <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            className="md:hidden bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/40 text-white w-auto px-3 justify-center shadow-lg hover:shadow-xl transition-all duration-300 will-change-transform"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div
            className="md:hidden mt-4 p-4 bg-black/70 md:backdrop-blur-xs rounded-lg border border-white/30 will-change-transform animate-in slide-in-from-top-2 duration-200"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#devices"
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Devices
              </Link>
              <Link
                href="#contact"
                className="text-white/90 hover:text-white text-sm font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <hr className="border-white/20" />
              <Button
                className="bg-black/40 hover:bg-black/50 md:bg-white/15 md:hover:bg-white/25 border border-white/30 hover:border-white/40 text-white w-full justify-center shadow-lg hover:shadow-xl transition-all duration-300 will-change-transform"
                size="sm"
                style={{ transform: "translate3d(0, 0, 0)" }}
                onClick={() => {
                  document.getElementById("devices")?.scrollIntoView({ behavior: "smooth" })
                  setMobileMenuOpen(false)
                }}
              >
                Download Now
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 min-h-screen flex items-center bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            {/* Hero Content - Left Aligned */}
            <div className="max-w-2xl lg:max-w-3xl">
              <h1
                className="text-white font-light leading-tight tracking-tight mb-6 relative"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                Your Ultimate Movie Experience
              </h1>

              {/* Supporting Text */}
              <p
                className="text-white mb-8 max-w-xl"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: "1.5",
                }}
              >
                Discover, stream, and enjoy unlimited movies and TV shows with Yoteshin Bank. High-quality streaming
                across all your devices with personalized recommendations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-black/40 hover:bg-black/50 md:bg-black/50 md:hover:bg-black/60 md:backdrop-blur-sm border border-white/30 hover:border-white/40 text-white transition-all duration-300 hover:-translate-y-0.5 px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl will-change-transform"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  onClick={() => document.getElementById("devices")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Start Watching Free
                  <Play className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="bg-black/30 hover:bg-black/40 md:bg-black/40 md:hover:bg-black/50 md:backdrop-blur-sm border border-white/30 hover:border-white/40 text-white transition-all duration-300 hover:-translate-y-0.5 px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl will-change-transform"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  onClick={() => document.getElementById("devices")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Watch Trailer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="features" className="relative z-10 py-20 px-4 lg:px-8 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
              Everything You Need for Movie Entertainment
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Experience cinema like never before with our comprehensive movie streaming platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black/40 md:bg-black/30 md:backdrop-blur-sm border-white/20 text-white hover:bg-black/50 md:hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl will-change-transform">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5" />
                  4K Ultra HD Streaming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Enjoy crystal-clear 4K resolution with HDR support for the ultimate viewing experience.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 md:bg-black/30 md:backdrop-blur-sm border-white/20 text-white hover:bg-black/50 md:hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl will-change-transform">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Offline Downloads
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Download your favorite movies and shows to watch offline anywhere, anytime.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 md:bg-black/30 md:backdrop-blur-sm border-white/20 text-white hover:bg-black/50 md:hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl will-change-transform">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="h-5 w-5" />
                  Multi-Device Sync
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">
                  Start watching on one device and continue seamlessly on another with cloud sync.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="devices" className="relative z-10 py-20 px-4 lg:px-8 bg-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">Available on All Your Devices</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Stream seamlessly across smartphones, tablets, smart TVs, and more
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-black/40 md:bg-black/30 md:backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-4 hover:bg-black/50 md:hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl h-48 flex flex-col justify-center will-change-transform">
                <Monitor className="h-16 w-16 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">TV & Android Box</h3>
                <p className="text-white/70">Smart TVs & Android TV Boxes</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-black/40 md:bg-black/30 md:backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-4 hover:bg-black/50 md:hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl h-48 flex flex-col justify-center will-change-transform">
                <Smartphone className="h-16 w-16 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">Android Phone</h3>
                <p className="text-white/70">Android 8.0+</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-black/40 md:bg-black/30 md:backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-4 hover:bg-black/50 md:hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl h-48 flex flex-col justify-center will-change-transform">
                <Monitor className="h-16 w-16 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">Computer</h3>
                <p className="text-white/70">Windows PC</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-black/40 md:bg-black/30 md:backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-4 hover:bg-black/50 md:hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl h-48 flex flex-col justify-center will-change-transform">
                <Apple className="h-16 w-16 mx-auto mb-4 text-white" />
                <h3 className="text-xl font-semibold text-white mb-2">Macbook</h3>
                <p className="text-white/70">macOS</p>
              </div>
            </div>
          </div>

          {/* Download Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black/60 hover:bg-black/70 md:bg-black/50 md:hover:bg-black/60 md:backdrop-blur-sm border border-white/30 hover:border-white/40 text-white transition-all duration-300 hover:-translate-y-0.5 px-8 py-3 shadow-lg hover:shadow-xl will-change-transform"
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => window.open("https://cdn.msubcloud1.xyz/file/msubcloud/app/msubtv.apk", "_blank")}
            >
              <Monitor className="mr-2 h-5 w-5" />
              TV & Android Box
            </Button>
            <Button
              size="lg"
              className="bg-black/60 hover:bg-black/70 md:bg-black/50 md:hover:bg-black/60 md:backdrop-blur-sm border border-white/30 hover:border-white/40 text-white transition-all duration-300 hover:-translate-y-0.5 px-8 py-3 shadow-lg hover:shadow-xl will-change-transform"
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => window.open("https://cdn.msubcloud1.xyz/file/msubcloud/app/msubph.apk", "_blank")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Android Phone
            </Button>
            <Button
              size="lg"
              className="bg-black/60 hover:bg-black/70 md:bg-black/50 md:hover:bg-black/60 md:backdrop-blur-sm border border-white/30 hover:border-white/40 text-white transition-all duration-300 hover:-translate-y-0.5 px-8 py-3 shadow-lg hover:shadow-xl will-change-transform"
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => window.open("https://cdn.msubcloud1.xyz/file/msubcloud/app/msubpc.exe", "_blank")}
            >
              <Monitor className="mr-2 h-5 w-5" />
              Computer
            </Button>
            <Button
              size="lg"
              className="bg-black/60 hover:bg-black/70 md:bg-black/50 md:hover:bg-black/60 md:backdrop-blur-sm border border-white/30 hover:border-white/40 text-white transition-all duration-300 hover:-translate-y-0.5 px-8 py-3 shadow-lg hover:shadow-xl will-change-transform"
              style={{ transform: "translate3d(0, 0, 0)" }}
              onClick={() => window.open("https://cdn.msubcloud1.xyz/file/msubcloud/app/msubmac.dmg", "_blank")}
            >
              <Apple className="mr-2 h-5 w-5" />
              Macbook
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4 lg:px-8 bg-slate-900">
        <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>
        <div className="container mx-auto text-center relative">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">Get in Touch</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Have questions? Need support? We're here to help you enjoy the best movie experience.
          </p>

          <Button
            size="lg"
            onClick={() => setContactPopupOpen(true)}
            className="bg-black/60 hover:bg-black/70 md:bg-black/50 md:hover:bg-black/60 md:backdrop-blur-sm border border-white/30 hover:border-white/40 text-white transition-all duration-300 hover:-translate-y-0.5 px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl will-change-transform"
            style={{ transform: "translate3d(0, 0, 0)" }}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
      </section>

      {contactPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setContactPopupOpen(false)} />
          <Card className="relative bg-black/70 md:bg-black/60 md:backdrop-blur-sm border-white/30 text-white max-w-md w-full will-change-transform">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-between">
                Contact Us
                <Button onClick={() => setContactPopupOpen(false)} className="text-white/70 hover:text-white">
                  <X className="h-5 w-5" />
                </Button>
              </CardTitle>
              <CardDescription className="text-white/70">Choose your preferred way to reach us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-black/60 hover:bg-black/70 md:bg-black/50 md:hover:bg-black/60 md:backdrop-blur-sm border border-white/30 hover:border-white/40 text-white justify-start transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl will-change-transform"
                onClick={() => window.open("https://m.me/yoteshinbank", "_blank")}
              >
                <MessageSquare className="mr-3 h-5 w-5" />
                Facebook Messenger
              </Button>

              <Button
                className="w-full bg-black/60 hover:bg-black/70 md:bg-black/50 md:hover:bg-black/60 md:backdrop-blur-sm border border-white/30 hover:border-white/40 text-white justify-start transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl will-change-transform"
                onClick={() => window.open("https://t.me/+959757866441", "_blank")}
              >
                <Send className="mr-3 h-5 w-5" />
                Telegram - 09757866441
              </Button>

              <Button
                className="w-full bg-black/60 hover:bg-black/70 md:bg-black/50 md:hover:bg-black/60 md:backdrop-blur-sm border border-white/30 hover:border-white/40 text-white justify-start transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl will-change-transform"
                onClick={() => window.open("viber://chat?number=+959769161237", "_blank")}
              >
                <Phone className="mr-3 h-5 w-5" />
                Viber - 09769161237
              </Button>

              <Button
                className="w-full bg-black/60 hover:bg-black/70 md:bg-black/50 md:hover:bg-black/60 md:backdrop-blur-sm border border-white/30 hover:border-white/40 text-white justify-start transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl will-change-transform"
                onClick={() => window.open("viber://chat?number=+959757866441", "_blank")}
              >
                <Phone className="mr-3 h-5 w-5" />
                Viber - 09757866441
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Subtle glow effects */}
      <div className="fixed inset-0 -z-5 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
    </div>
  )
}
