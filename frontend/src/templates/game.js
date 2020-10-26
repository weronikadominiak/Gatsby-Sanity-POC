import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Games = ({ data: { sanityGame: game } }) => (
  <Layout>
    <h1>Game</h1>
    <h2>{game.title}</h2>
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    sanityGame(slug: { current: { eq: $slug } }) {
      id
      title
    }
  }
`;

export default Games;
