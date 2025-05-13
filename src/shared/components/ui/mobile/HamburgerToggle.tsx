'use client'

type Props = {
  isOpen: boolean
  onClick: () => void
  className?: string
}

const HamburgerToggle = ({ isOpen, onClick, className = '' }: Props) => {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      className={`relative flex h-6 w-6 flex-col items-center justify-center gap-1 md:hidden ${className}`}
    >
      <span
        className={`h-0.5 w-6 bg-black transition-all duration-300 ${
          isOpen ? 'translate-y-1.5 rotate-45' : ''
        }`}
      />
      <span
        className={`h-0.5 w-6 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
      />
      <span
        className={`h-0.5 w-6 bg-black transition-all duration-300 ${
          isOpen ? '-translate-y-1.5 -rotate-45' : ''
        }`}
      />
    </button>
  )
}

export default HamburgerToggle
