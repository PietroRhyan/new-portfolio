import type { EntryFieldTypes } from "contentful";

export interface ProjectsSkeleton {
  contentTypeId: "projects";
  fields: {
    title: EntryFieldTypes.Text;
    role: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    startDate: EntryFieldTypes.Text;
    endDate: EntryFieldTypes.Text;
    style: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
  };
}

export interface PostsSkeleton {
  contentTypeId: "posts"
  fields: {
    title: EntryFieldTypes.Text;
    mainImage: EntryFieldTypes.AssetLink;
    startDate: EntryFieldTypes.Text;
    endDate: EntryFieldTypes.Text;
    role: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    tags: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    content: EntryFieldTypes.RichText
  }
}

export interface AwardsSkeleton {
  contentTypeId: "awards";
  fields: {
    title: EntryFieldTypes.Text;
    from: EntryFieldTypes.Text;
    endDate: EntryFieldTypes.Text;
  };
}

export interface AmbitionsSkeleton {
  contentTypeId: 'ambitions'
  fields: {
    ambition: EntryFieldTypes.Text;
    isChecked: EntryFieldTypes.Boolean;
    kind: EntryFieldTypes.Text;
  }
}