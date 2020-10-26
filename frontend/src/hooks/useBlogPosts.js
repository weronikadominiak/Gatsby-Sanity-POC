import { graphql, useStaticQuery } from 'gatsby';

const useBlogPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityBlogPost {
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

  return data.allSanityBlogPost.edges.map((post) => ({
    slug: post.node.slug.current,
    title: post.node.title,
    id: post.node.id,
  }));
};

export default useBlogPosts;
