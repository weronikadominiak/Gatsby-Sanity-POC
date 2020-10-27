import { graphql, useStaticQuery } from 'gatsby';

const useEvents = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityEvent {
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

  return data.allSanityEvent.edges.map((event) => ({
    slug: event.node.slug.current,
    title: event.node.title,
    id: event.node.id,
  }));
};

export default useEvents;
