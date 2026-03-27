import type { Asset, UnresolvedLink } from "contentful";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { getImageUrl } from "@/lib/types";

export interface CardProps {
  img?: UnresolvedLink<"Asset"> | Asset<undefined, string>;
  title: string;
  role: string;
  description: string;
  href: string;
  startDate?: string;
  endDate?: string;
  style?: "full" | "compact";
}

export function Card({
  img,
  title,
  role,
  description,
  href,
  startDate,
  endDate,
  style = "full",
}: CardProps) {
  const t = useTranslations("commom");

  const formattedDate = `${startDate} - ${endDate}`;
  const imageUrl = img ? getImageUrl(img) : null

  return (
    <Link href={`/experiences/${href}`} className="rounded-2xl group">
      <div className="w-full bg-background rounded-2xl border border-dark-gray cursor-pointer flex flex-col sm:flex-row overflow-hidden shadow-container hover:bg-radial-[at_10%_100%] transition-colors duration-200 hover:border-gray/20 hover:from-[#2F2F2F] hover:to-background hover:to-50%">
        {style === "full" && imageUrl && (
          <div className="relative w-full h-52 sm:w-[166px] sm:h-auto sm:self-stretch shrink-0">
            <Image
              src={imageUrl}
              alt={`${title} image`}
              fill
              sizes="(max-width: 640px) 100vw, 166px"
              quality={80}
              draggable={false}
              className="object-cover"
            />
          </div>
        )}

        <div className="w-full h-full p-6 flex flex-col gap-4">
          <div className="w-full">
            <div className="w-full flex items-center justify-between">
              <h4 className="text-lg">{title}</h4>

              <span className="text-base text-foreground/60 text-end">{role}</span>
            </div>

            {style === "full" && startDate && (
              <span className="text-xs text-gray/50">{formattedDate}</span>
            )}
          </div>

          <p className="text-base text-foreground/80 leading-4.5 line-clamp-3">
            {description}
          </p>
          <div className="w-full flex items-center justify-end">
            <div className="bg-background rounded-sm border border-dark-gray p-1 text-xs text-gray/50 flex items-center justify-center w-fit group-hover:border-gray/20 group-hover:text-gray">
              {t("seeMore")}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
