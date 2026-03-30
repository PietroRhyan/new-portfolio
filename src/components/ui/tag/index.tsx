interface TagProps {
  title: string
}

export function Tag({ title }: TagProps) {
  return (
    <div className="flex items-center justify-center rounded-full px-2 border border-dashed border-gray/50 bg-radial-[at_50%_200%] from-foreground/40 to-80% to-background">
      <span className="text-[12px] text-gray" >
        {title}

      </span>
    </div>
  )
}