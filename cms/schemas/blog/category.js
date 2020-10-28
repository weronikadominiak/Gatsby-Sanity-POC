import UserIcon from 'part:@sanity/base/user-icon';

export default {
  name: 'category',
  title: 'Category',
  type: 'document', // could be object and then listed like categories
  icon: UserIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
  ],
};
