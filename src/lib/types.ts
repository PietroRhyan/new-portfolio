import type { Asset, AssetFile, UnresolvedLink } from "contentful";

export type Locale = "pt-BR" | "en-US";

function isAsset(value: Asset | UnresolvedLink<"Asset">): value is Asset {
  return value.sys.type === "Asset";
}

export function getImageUrl(asset: Asset | UnresolvedLink<"Asset">): string {
  if (!isAsset(asset)) return '/images/fallback.jpg';

  const file = asset.fields.file as
    | AssetFile
    | Record<string, AssetFile | null>
    | undefined;

  if (!file) return '/images/fallback.jpg';

  const assetFile = (
    'url' in file
      ? (file as AssetFile)
      : (Object.values(file) as Array<AssetFile | null>).find(
        (v): v is AssetFile => v != null && typeof v === 'object' && 'url' in v,
      )
  ) as AssetFile | undefined;

  const url = assetFile?.url;
  if (!url) return '/images/fallback.jpg';

  return url.startsWith("//") ? `https:${url}` : url;
}
