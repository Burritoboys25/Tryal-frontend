export default function MainFooter() {
  return (
    <footer className="bg-neutral-900 px-[1rem] py-[3rem] text-sm text-white md:px-[3rem]">
      <div className="mx-auto w-full px-[1rem] md:max-w-[62.5rem] md:px-[1rem] 2xl:max-w-[90rem] 2xl:px-0">
        <div className="flex flex-col gap-[3rem] md:flex-row md:items-start md:justify-between">
          {/* Left: Branding + Navigation Links */}
          <div className="flex flex-col gap-[2rem] md:flex-row md:gap-[20rem]">
            <div>
              <h3 className="font-logo mb-[1rem] text-[1.5rem] font-medium">Tryal</h3>
            </div>
            <div>
              <h4 className="text-body1 mb-[1rem] !font-extrabold">Company</h4>
              <ul className="text-body2 space-y-[1rem]">
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
              <h4 className="text-body1 mb-[1rem] !font-extrabold">Legal</h4>
              <ul className="text-body2 space-y-[1rem]">
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
        <div className="border-background mt-[3rem] flex flex-col items-center justify-between gap-[0.5rem] border-t pt-[1rem] text-xs text-gray-400 md:flex-row">
          <p>©2025 Tryal – All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
