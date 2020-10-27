import { MdSettings as icon } from "react-icons/md"

export default {
  name: "siteSettings",
  title: "Settings",
  type: "document",
  icon,
  fields: [
    { 
      name: 'title',
      title: 'Title',
      type: "string",
    },
    {
        name: "someSetting",
        title: "someSetting",
        type: "boolean",
        description:
        "This is some very important setting",
      },
      {
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        },
        description:
        "Tags for the website",
      },
      {
        name: "Sth",
        title: "sth",
        type: "string",
        options: {
          list: [
            { title: "Game", value: "game" },
            { title: "Tech", value: "tech" },
            { title: "Company", value: "company" },
          ],
          layout: "dropdown",
        }
      },

  ]
}
