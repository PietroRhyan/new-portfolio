import type { Asset, AssetFile, UnresolvedLink } from "contentful";

export type Locale = "pt-BR" | "en-US";

function isAsset(value: Asset | UnresolvedLink<"Asset">): value is Asset {
  return value.sys.type === "Asset";
}

export function getImageUrl(asset: Asset | UnresolvedLink<"Asset">): string | null {
  if (!isAsset(asset)) return null;

  const file = asset.fields.file as
    | AssetFile
    | Record<string, AssetFile | null>
    | undefined;

  if (!file) return null;

  const assetFile = (
    'url' in file
      ? (file as AssetFile)
      : (Object.values(file) as Array<AssetFile | null>).find(
        (v): v is AssetFile => v != null && typeof v === 'object' && 'url' in v,
      )
  ) as AssetFile | undefined;

  const url = assetFile?.url;
  if (!url) return null;

  return url.startsWith("//") ? `https:${url}` : url;
}
