import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import useGames from '../hooks/useGames';
import useAuthors from '../hooks/useAuthors';
import useEvents from '../hooks/useEvents';
import useBlogPosts from '../hooks/useBlogPosts';

const IndexPage = ({ data }) => {
  const games = useGames();
  const authors = useAuthors();
  const events = useEvents();
  const blogPosts = useBlogPosts();

  return (
    <Layout>
      <SEO title="Home" />
      <h2>Games:</h2>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            <Link to={game.slug}>{game.title}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Events:</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={event.slug}>{event.title}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Blog:</h2>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Team:</h2>
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            <Link to={author.slug}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;
