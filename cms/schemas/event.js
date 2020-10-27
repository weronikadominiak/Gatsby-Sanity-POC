import { MdLocalPlay as icon } from "react-icons/md"

export default {
  name: "event",
  title: "Event",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "E.g.: Our first ever screening of Gattaca",
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
      name: "isOpen",
      title: "isOpen",
      type: "boolean",
      description:
        "Set to isOpen when this screening should be visible on a front-end",
    },
    {
      name: "beginAt",
      title: "Starts at",
      type: "datetime",
      description: "When does the screening start?",
    },
    {
      name: "endAt",
      title: "Ends at",
      type: "datetime",
      description: "When does the screening end?",
    },
    {
      name: "level",
      title: "Who can come?",
      type: "string",
      options: {
        list: [
          { title: "< 1 year experience", value: "members" },
          { title: "2-3 years experience", value: "friends" },
          { title: "3 + years experience", value: "anyone" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "infoUrl",
      title: "More info at",
      type: "url",
      description:
        "URL to imdb.com, rottentomatoes.com or some other place with reviews, stats, etc",
    },
    {
      name: "ticket",
      title: "Ticket",
      type: "file",
      description: "PDF for printing a physical ticket",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "movie.image",
    },
  },
}
