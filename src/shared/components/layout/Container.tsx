type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[95%] px-[1rem] md:max-w-[48rem] md:px-[1.5rem] 2xl:max-w-[90rem] 2xl:px-[3rem] ${className}`}
    >
      {children}
    </div>
  )
}
