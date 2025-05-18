type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[95%] px-4 md:max-w-[768px] md:px-6 2xl:max-w-[1440px] 2xl:px-12 ${className}`}
    >
      {children}
    </div>
  )
}
