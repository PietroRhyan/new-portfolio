import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  type Block,
  type Document,
  INLINES,
  type Inline,
  MARKS,
} from "@contentful/rich-text-types";
import type { Asset } from "contentful";
import Image from "next/image";
import { getLocale } from "next-intl/server";
import { Tag } from "@/components/ui/tag";
import { getProjectBySlug } from "@/lib/projects";
import { getImageUrl } from "@/lib/types";

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => (
      <strong className="font-semibold">{text}</strong>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_: Block | Inline, children: React.ReactNode) => (
      <p className="mb-4 leading-relaxed text-sm text-foreground/80">
        {children}
      </p>
    ),
    [BLOCKS.HEADING_2]: (_: Block | Inline, children: React.ReactNode) => (
      <h2 className="text-lg font-semibold mb-4 pt-4">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_: Block | Inline, children: React.ReactNode) => (
      <h2 className="text-base font-semibold mb-4">{children}</h2>
    ),
    [BLOCKS.UL_LIST]: (_: Block | Inline, children: React.ReactNode) => (
      <ul className="list-disc mb-4 pl-6">{children}</ul>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
      const asset = node.data.target as Asset;
      const file = asset.fields.file as {
        url: string;
        details: { image: { width: number; height: number } };
      };
      const url = file?.url?.startsWith("//") ? `https:${file.url}` : file?.url;

      if (!url) return null;

      const width = 664;
      const height = 368;

      return (
        <div
          className="w-full rounded-xl p-1.5 flex items-center justify-center bg-dark-gray mb-4"
          style={{
            aspectRatio: `${width} / ${height}`,
            maxWidth: `${width}px`,
          }}
        >
          <div className="w-full h-full relative overflow-hidden rounded-md" >
            <Image
              src={url}
              alt={(asset.fields.title as string) ?? "Embedded image"}
              fill
              sizes="(max-width: 664px) 100vw, 664px"
              quality={80}
              draggable={false}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      );
    },
    // Links
    [INLINES.HYPERLINK]: (node: Block | Inline, children: React.ReactNode) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 underline underline-offset-4 hover:opacity-80"
      >
        {children}
      </a>
    ),
  },
};

export async function Content({ slug }: { slug: string }) {
  const locale = await getLocale();
  const lang = locale === "en" ? "en-US" : "pt-BR";

  const project = await getProjectBySlug(slug, lang);
  const post = project.fields;

  const { content } = project.fields

  const formattedDate = `${post.startDate} - ${post.endDate}`;
  const imageUrl = post.mainImage
    ? getImageUrl(post.mainImage)
    : "/images/fallback.jpg";

  return (
    <main className="max-w-216 mx-auto border-x border-dashed border-x-dark-gray">
      <div className="w-full flex flex-col gap-9">
        <div className="w-full h-55 relative shrink-0">
          <Image
            src={imageUrl}
            alt={`${post.title} image`}
            fill
            sizes="100vw"
            quality={80}
            draggable={false}
            className="object-cover"
          />
          <div
            role="img"
            className="absolute z-10 top-0 left-0 w-full h-full bg-background/25"
          />
        </div>

        <div className="max-w-[724px] w-full mx-auto flex flex-col items-center justify-center gap-4.5 text-center px-9">
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-semibold text-xl">{post.title}</h1>
            <span className="text-xs text-gray/50">{formattedDate}</span>
          </div>

          <h4 className="text-base text-foreground/80">{post.role}</h4>

          <div className="w-full flex items-center justify-center gap-3 flex-wrap">
            {post.tags.map((tag) => (
              <Tag key={tag} title={tag} />
            ))}
          </div>
        </div>

        <article className="max-w-[724px] w-full mx-auto px-9 mb-20">
          {documentToReactComponents(content as Document, richTextOptions)}
        </article>
      </div>
    </main>
  );
}
