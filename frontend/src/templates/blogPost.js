import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPost = ({ data: { sanityBlogPost: blogPost } }) => (
  <Layout>
    <h1>Blog Post</h1>
    <h2>{blogPost.title}</h2>
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    sanityBlogPost(slug: { current: { eq: $slug } }) {
      id
      title
    }
  }
`;

export default BlogPost;
