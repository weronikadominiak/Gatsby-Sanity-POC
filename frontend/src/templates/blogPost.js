import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPost = ({ data: { sanityBlogPost: blogPost } }) => {
  console.log(blogPost);
  return (
    <Layout>
      <h1>Blog Post</h1>
      <h2>{blogPost.title}</h2>
      <p>{blogPost.publishDate}</p>
      <p>{blogPost.overview[0].children[0].text}</p>
      <h3>Tags:</h3>
      <ul>
        {blogPost.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <h3>Authors:</h3>
      <ul>
        {blogPost.authors.map(author => (
          <li key={author.name}>{author.name}</li>
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
      overview {
        children {
          text
        }
      }
    }
  }
`;

export default BlogPost;
