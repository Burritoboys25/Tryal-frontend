import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 px-4 py-12 text-sm text-white md:px-12">
      <div className="mx-auto flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        {/* Left: Branding + Navigation Links */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-80">
          <div>
            <h3 className="font-logo mb-4 text-[24px] font-medium">Tryal</h3>
          </div>
          <div>
            <h4 className="text-body1 mb-4">Company</h4>
            <ul className="text-body2 space-y-4 text-gray-300">
              <li>
                <a href="about" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="how-it-works" className="hover:underline">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Newsletter */}
        <div className="mt-8 w-full md:mt-0 md:w-1/3">
          <h4 className="text-body1 mb-2">Newsletter</h4>
          <p className="mb-4 text-gray-300">
            Subscribe to our newsletter to stay up to date on our latest news.
          </p>

          <form className="flex items-center gap-2 rounded-md bg-white px-2 py-1">
            <Mail size={18} className="text-gray-500" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full max-w-xs bg-transparent text-sm text-black outline-none"
            />
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/20 pt-6 text-xs text-gray-400 md:flex-row">
        <p>©2025 Tryal – All rights reserved</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  )
}
