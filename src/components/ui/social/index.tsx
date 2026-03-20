import Link from "next/link";

export interface SocialProps {
  href: string;
  icon: React.ReactNode;
}

export function Social({ href, icon }: SocialProps) {
  return (
    <Link href={href} className="rounded-full">
      <div className="p-1 rounded-full bg-background flex items-center justify-center border border-dark-gray cursor-pointer text-gray/20 hover:bg-radial-[at_80%_100%] transition-colors duration-200 hover:border-gray/20 hover:from-[#2F2F2F] hover:to-background hover:to-50% hover:text-gray">
        {icon}
      </div>
    </Link>
  )
}