import React from 'react';

const Preview = () => <div className={styles.test}>hello</div>;

export default {
  title: 'Iframe',
  name: 'iframeGroup',
  type: 'object',
  fields: [
    {
      name: 'multiple',
      type: 'array',
      of: [
        {
          title: 'Iframe',
          name: 'iframe',
          type: 'iframe',
        },
      ],
    },
  ],
  preview: {
    component: Preview,
  },
};
