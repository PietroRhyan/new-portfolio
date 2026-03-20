interface SectionProps {
  id: string
  title: string
  description: string
  children: React.ReactNode
}

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="w-full pb-14">
      <div className='w-full py-16 px-9 border-y border-dashed border-y-dark-gray flex items-center justify-between gap-4' >
        <h2 className="font-playfair font-semibold text-2xl italic">{title}</h2>
        <p className="text-base text-gray/50" >{description}</p>
      </div>

      <div className="w-full pt-6.5 px-9 pb-14" >
        {children}
      </div>
    </section>
  )
}