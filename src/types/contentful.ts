import type { EntryFieldTypes } from "contentful";

export interface ProjectsSkeleton {
  contentTypeId: "projects";
  fields: {
    title: EntryFieldTypes.Text;
    role: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    img: EntryFieldTypes.AssetLink;
    startDate: EntryFieldTypes.Text;
    endDate: EntryFieldTypes.Text;
    style: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
  };
}

export interface AwardsSkeleton {
  contentTypeId: "awards";
  fields: {
    title: EntryFieldTypes.Text;
    from: EntryFieldTypes.Text;
    endDate: EntryFieldTypes.Text;
  };
}