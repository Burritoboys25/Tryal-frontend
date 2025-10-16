type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return <div className={`mx-auto px-4 2xl:max-w-3xl 2xl:px-8 ${className}`}>{children}</div>
}
