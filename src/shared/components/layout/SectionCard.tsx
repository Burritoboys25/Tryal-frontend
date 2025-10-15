interface SectionCardProps {
  children: React.ReactNode
  className?: string
  bg?: string
}
const SectionCard = ({ children, className, bg }: SectionCardProps) => {
  return (
    <section className={`inner section-vertical-spacing rounded-t-3xl ${className} ${bg}`}>
      {children}
    </section>
  )
}

export default SectionCard
