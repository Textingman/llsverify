import Link from 'next/link';
import Image from 'next/image';
import { Shield, Target, Users, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#004b35]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-32">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/LLSVerify Logo new.png" 
                  alt="LLS Verify" 
                  width={500} 
                  height={167}
                  className="h-24 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-600 hover:text-[#c42a83] px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="text-gray-900 hover:text-[#c42a83] px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                <Link href="/privacy" className="text-gray-600 hover:text-[#c42a83] px-3 py-2 rounded-md text-sm font-medium">
                  Privacy
                </Link>
                <Link href="/terms" className="text-gray-600 hover:text-[#c42a83] px-3 py-2 rounded-md text-sm font-medium">
                  Terms
                </Link>
                <Link href="/signup" className="bg-[#c42a83] text-white hover:bg-[#a32269] px-4 py-2 rounded-md text-sm font-medium">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#004b35] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white mb-6">
              About LLS Verify
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We're building the future of SMS verification, helping businesses verify customer identity while improving delivery rates.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-200 mb-4">
              LLS Verify was created to solve a critical problem: businesses need a reliable way to verify customer identity via SMS while maintaining high delivery rates.
            </p>
            <p className="text-lg text-gray-200 mb-4">
              We provide a simple, secure verification platform that acts as a trusted intermediary between businesses and their customers.
            </p>
            <p className="text-lg text-gray-200">
              Our goal is to make SMS verification seamless, secure, and accessible for businesses of all sizes.
            </p>
          </div>
          <div className="bg-[#003d2b] rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Target className="w-8 h-8 text-[#f8974e]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Focused on Quality</h3>
                  <p className="text-gray-200">
                    Built from the ground up to meet industry standards and best practices.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-[#f8974e]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Security First</h3>
                  <p className="text-gray-200">
                    Your customers' data is protected with enterprise-grade security measures.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Zap className="w-8 h-8 text-[#f8974e]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                  <p className="text-gray-200">
                    Optimized for speed with sub-2-second page loads on mobile networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Businesses Choose Us</h2>
          <p className="text-xl text-gray-200">
            Trusted by companies that value compliance, security, and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-[#f8974e] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#c42a83]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Reliable Service</h3>
            <p className="text-gray-200">
              Built with industry best practices for maximum reliability.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#f8974e] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#c42a83]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Multi-Brand Support</h3>
            <p className="text-gray-200">
              Support multiple brands with customizable styling options.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#f8974e] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-[#c42a83]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">High Performance</h3>
            <p className="text-gray-200">
              Global CDN ensures fast load times worldwide.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#f8974e] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-[#c42a83]" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Easy Integration</h3>
            <p className="text-gray-200">
              Simple URL-based integration with comprehensive documentation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#c42a83] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
            Join businesses that trust LLS Verify for SMS verification.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-[#f8974e] text-white text-lg font-semibold rounded-lg hover:bg-[#e6863d] transition-colors shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003d2b] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LLS Verify</h3>
              <p className="text-gray-400">
                SMS verification for businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className="text-gray-400 hover:text-white">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                support@llsverify.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LLS Verify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
