type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return <div className={`mx-auto w-full max-w-7xl px-4 md:px-12 ${className}`}>{children}</div>
}
