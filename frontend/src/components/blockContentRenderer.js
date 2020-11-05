import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';

const urlFor = source => urlBuilder({ projectId: '6jf3jxjt', dataset: 'production' }).image(source);

const serializers = {
  types: {
    image: props => (
      <figure>
        <img src={urlFor(props.node.asset).url()} alt={props.node.alt} />
        <figcaption>{props.node.caption}</figcaption>
      </figure>
    ),
    iframe: props => <div dangerouslySetInnerHTML={{ __html: props.node.code }}></div>,
  },
  marks: {
    highlight: props => <span className="highlight">{props.children}</span>,
  },
};

const blockContentRenderer = ({ blocks }) => <BlockContent blocks={blocks} serializers={serializers} />;

export default blockContentRenderer;
