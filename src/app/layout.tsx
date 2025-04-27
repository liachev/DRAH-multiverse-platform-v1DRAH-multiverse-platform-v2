import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Multiverse Platform for Real Estate Solutions',
  description: 'Bridging the gap between virtual and physical real estate markets',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-full bg-white shadow-md">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">Multiverse Platform</div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="text-blue-600 hover:text-blue-800">Home</a></li>
                <li><a href="/properties" className="text-gray-600 hover:text-blue-600">Properties</a></li>
                <li><a href="/auctions" className="text-gray-600 hover:text-blue-600">Auctions</a></li>
                <li><a href="/business" className="text-gray-600 hover:text-blue-600">Business Solutions</a></li>
                <li><a href="/contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="w-full bg-gray-800 text-white py-8">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold mb-4">Multiverse Platform</h3>
                <p className="text-gray-400">Bridging the gap between virtual and physical real estate markets</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                  <li><a href="/properties" className="text-gray-400 hover:text-white">Properties</a></li>
                  <li><a href="/auctions" className="text-gray-400 hover:text-white">Auctions</a></li>
                  <li><a href="/business" className="text-gray-400 hover:text-white">Business Solutions</a></li>
                  <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>© 2025 Multiverse Platform for Real Estate Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
