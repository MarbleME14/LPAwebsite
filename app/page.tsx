"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, FileText, Users, CheckCircle } from "lucide-react"

export default function PreviewHome() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-900">LPA Online</div>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline" className="border-indigo-200 text-indigo-900 hover:bg-indigo-50">
                  Log in
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-900 py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Secure Your Future with a Lasting Power of Attorney
                </h1>
                <p className="text-xl text-indigo-100 mb-8">
                  Create your LPA online today. Quick, easy, and guided by legal experts every step of the way.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/start/lpa">
                    <Button
                      size="lg"
                      className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg w-full sm:w-auto"
                    >
                      Start Your LPA Now
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Quick Process", desc: "Complete in 15 minutes" },
                    { title: "Expert Support", desc: "Guided assistance" },
                    { title: "Secure & Safe", desc: "Data protection" },
                    { title: "Affordable", desc: "Clear pricing" },
                  ].map((item, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <h3 className="text-white font-semibold">{item.title}</h3>
                      <p className="text-indigo-200 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-indigo-900 mb-4">Why Choose Our LPA Service?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We make creating your Lasting Power of Attorney simple, secure, and affordable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Secure & Protected",
                  description: "Bank-level security for your personal information",
                  features: ["256-bit encryption", "Data protection compliant", "Secure storage"],
                },
                {
                  icon: FileText,
                  title: "Simple Process",
                  description: "Complete your LPA in easy, guided steps",
                  features: ["Step-by-step guidance", "Clear instructions", "Expert support"],
                },
                {
                  icon: Users,
                  title: "Expert Support",
                  description: "Get help from our legal team whenever needed",
                  features: ["Live chat support", "Phone assistance", "Email help"],
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-indigo-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

