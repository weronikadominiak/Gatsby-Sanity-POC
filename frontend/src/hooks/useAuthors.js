import { graphql, useStaticQuery } from 'gatsby';

const useAuthors = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityAuthor {
        edges {
          node {
            slug {
              current
            }
            name
            id
          }
        }
      }
    }
  `);

  return data.allSanityAuthor.edges.map((author) => ({
    slug: author.node.slug.current,
    name: author.node.name,
    id: author.node.id,
  }));
};

export default useAuthors;
