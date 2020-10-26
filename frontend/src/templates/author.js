import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Author = ({ data: { sanityAuthor: author } }) => (
  <Layout>
    <h1>Author</h1>
    <h2>{author.name}</h2>
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    sanityAuthor(slug: { current: { eq: $slug } }) {
      id
      name
    }
  }
`;

export default Author;
