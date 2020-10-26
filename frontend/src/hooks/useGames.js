import { graphql, useStaticQuery } from 'gatsby';

const useGames = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityGame {
        edges {
          node {
            slug {
              current
            }
            title
            id
          }
        }
      }
    }
  `);

  return data.allSanityGame.edges.map((game) => ({
    slug: game.node.slug.current,
    title: game.node.title,
    id: game.node.id,
  }));
};

export default useGames;
