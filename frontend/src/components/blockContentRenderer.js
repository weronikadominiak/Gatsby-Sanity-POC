import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const blockContentRenderer = ({ blocks }) => <BlockContent blocks={blocks} />;

export default blockContentRenderer;
