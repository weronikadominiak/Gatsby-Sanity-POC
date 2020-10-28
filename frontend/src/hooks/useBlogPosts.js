import { graphql, useStaticQuery } from 'gatsby';

const useBlogPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityBlogPost {
        edges {
          node {
            id
            title
            publishDate
            tags
            category {
              title
            }
            slug {
              current
            }
          }
        }
      }
    }
  `);

  return data.allSanityBlogPost.edges.map(post => ({
    ...post.node,
    slug: post.node.slug.current,
    category: post.node.category.title,
  }));
};

export default useBlogPosts;
