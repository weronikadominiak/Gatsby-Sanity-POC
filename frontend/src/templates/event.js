import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Event = ({ data: { sanityEvent: event } }) => (
  <Layout>
    <h1>Event</h1>
    <h2>{event.title}</h2>
  </Layout>
);

export const query = graphql`
  query($slug: String!) {
    sanityEvent(slug: { current: { eq: $slug } }) {
      id
      title
    }
  }
`;

export default Event;
