import { MdNoteAdd as icon } from "react-icons/md"

export default {
  name: "blogPost",
  title: "Blog Posts",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "overview",
      title: "Overview",
      type: "blockContent",
    },
    {
      name: "publishDate",
      title: "Publish date",
      type: "datetime",
    },
    {
      name: "hero",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "authos",
      title: "Authors",
      type: "array",
      of: [
        {
          name: "author",
          title: "Author",
          type: "reference",
          to: [{ type: "author" }],
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "releaseDate",
      media: "poster",
    },
    prepare(selection) {
      const year = selection.date && selection.date.split("-")[0]
      const cast = [selection.castName0, selection.castName1]
        .filter(Boolean)
        .join(", ")

      return {
        title: `${selection.title} ${year ? `(${year})` : ""}`,
        date: selection.date,
        subtitle: cast,
        media: selection.media,
      }
    },
  },
}
