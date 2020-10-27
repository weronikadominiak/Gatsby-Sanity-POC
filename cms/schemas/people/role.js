import UserIcon from "part:@sanity/base/user-icon"

export default {
  name: "role",
  title: "Role",
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
