import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import BlockContentRenderer from '../components/blockContentRenderer';

const BlogPost = ({ data: { sanityBlogPost: blogPost } }) => {
  console.log(blogPost);
  return (
    <Layout>
      <h2 className="title">{blogPost.title}</h2>
      <p className="subtitle">{blogPost.publishDate}</p>
      <BlockContentRenderer blocks={blogPost._rawOverview} />
      <h3>Tags:</h3>
      <ul>
        {blogPost.tags.map(tag => (
          <li key={tag} className="tag is-dark">
            {tag}
          </li>
        ))}
      </ul>
      <h3>Authors:</h3>
      <ul>
        {blogPost.authors.map(author => (
          <li key={author.name}>
            <Link to="/">{author.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    sanityBlogPost(slug: { current: { eq: $slug } }) {
      id
      title
      publishDate
      tags
      authors {
        name
        slug {
          current
        }
      }
      category {
        title
      }
      slug {
        current
      }
      _rawOverview
    }
  }
`;

export default BlogPost;
