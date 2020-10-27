import UserIcon from 'part:@sanity/base/user-icon';

export default {
  name: 'role',
  title: 'Roles',
  type: 'document', // could be object and then listed like categories
  icon: UserIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
};
