import { MdLocalMovies as icon } from "react-icons/md"

export default {
  name: "game",
  title: "Game",
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
      name: "releaseDate",
      title: "Release date",
      type: "datetime",
    },
    {
      name: "poster",
      title: "Poster Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "team",
      title: "Team",
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
