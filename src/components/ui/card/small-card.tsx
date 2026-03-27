interface SmallCardProps {
  title: string
  from: string
  endDate: string
}

export function SmallCard({ title, from, endDate }: SmallCardProps) {
  return (
    <div className="w-full bg-background rounded-2xl border border-dark-gray flex flex-col sm:flex-row overflow-hidden shadow-container hover:bg-radial-[at_10%_100%] transition-colors duration-200 hover:border-gray/20 hover:from-[#2F2F2F] hover:to-background hover:to-50%">
      <div className="w-full h-full py-4.5 px-6 flex flex-col">
        <div className="w-full flex items-center justify-between gap-4">
          <h4 className="text-lg text-wrap">{title}</h4>

          <span className="text-base text-foreground/60 text-end">{from}</span>
        </div>

        <span className="text-xs text-gray/50">{endDate}</span>
      </div>
    </div>
  )
}