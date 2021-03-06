import UserIcon from 'part:@sanity/base/user-icon';

export default {
  name: 'author',
  title: 'Team',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please use "Firstname Lastname" format',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'role',
      title: 'Role',
      type: 'reference',
      to: [{ type: 'role' }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'about',
      title: 'About',
      type: 'blockContent',
    },
  ],
  preview: {
    select: { title: 'name', media: 'image' },
  },
};
