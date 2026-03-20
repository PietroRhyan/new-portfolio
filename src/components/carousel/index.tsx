import Image from "next/image";

interface ProjectType {
  name: string;
  href: string;
}

const lProjects: ProjectType[] = [
  { name: "Manorder", href: "/images/manorder.png" },
  { name: "NeedU", href: "/images/needu.png" },
  { name: "Recycle.it", href: "/images/recycleit.png" },
]

const rProjects: ProjectType[] = [
  { name: "Fros Venture", href: "/images/fros.png" },
  { name: "Portfolio", href: "/images/portfolio.png" },
  { name: "CMA", href: "/images/cma.png" },
];

export function Carousel() {
  return (
    <section
      id="intro"
      className="relative top-0 -left-px w-[calc(100%+2px)] bg-background p-9 border-x border-x-background flex items-center justify-center gap-4"
    >
      <div className="overflow-hidden h-[275px] w-[calc(50%-18px)]">
        <div className="flex flex-col animate-scroll-up">
          {[...lProjects, ...lProjects].map((project, i) => (
            <div
              key={`${project.name}-${i}`}
              className="relative h-[215px] mb-4 shrink-0 rounded-xl overflow-hidden"
            >
              <Image
                src={project.href}
                alt={`${project.name} Project Image`}
                fill
                quality={80}
                draggable={false}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden h-[275px] w-[calc(50%-18px)]">
        <div className="flex flex-col animate-scroll-down">
          {[...rProjects, ...rProjects].map((project, i) => (
            <div
              key={`${project.name}-${i}`}
              className="relative h-[215px] -top-[calc(215px*5)] mb-4 shrink-0 rounded-xl overflow-hidden"
            >
              <Image
                src={project.href}
                alt={`${project.name} Project Image`}
                fill
                quality={80}
                draggable={false}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}