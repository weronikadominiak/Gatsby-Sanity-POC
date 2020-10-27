import UserIcon from "part:@sanity/base/user-icon"

export default {
  name: "category",
  title: "Blog Categories",
  type: "document",
  icon: UserIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
}
