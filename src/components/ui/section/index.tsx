interface SectionProps {
  id: string
  title: string
  description: string
  children: React.ReactNode
}

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="w-full pb-14">
      <div className='w-full py-16 px-4 sm:px-9 border-y border-dashed border-y-dark-gray flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center sm:text-start' >
        <h2 className="font-playfair font-semibold text-2xl italic">{title}</h2>
        <p className="text-base text-gray/50" >{description}</p>
      </div>

      <div className="w-full pt-6.5 px-4 sm:px-9 pb-14" >
        {children}
      </div>
    </section>
  )
}