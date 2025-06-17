export default function MainFooter() {
  return (
    <footer className="bg-neutral-900 px-4 py-12 text-sm text-white md:px-12">
      <div className="mx-auto flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        {/* Left: Branding + Navigation Links */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-80">
          <div>
            <h3 className="font-logo mb-4 text-[24px] font-medium">Tryal</h3>
          </div>
          <div>
            <h4 className="text-body1 mb-4 !font-extrabold">Company</h4>
            <ul className="text-body2 space-y-4">
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
                <a href="/about#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-body1 mb-4 !font-extrabold">Legal</h4>
            <ul className="text-body2 space-y-4">
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-background mt-12 flex flex-col items-center justify-between gap-2 border-t pt-4 text-xs text-gray-400 md:flex-row">
        <p>©2025 Tryal – All rights reserved</p>
      </div>
    </footer>
  )
}
