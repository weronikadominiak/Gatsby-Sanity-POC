/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const games = await graphql(`
    {
      allSanityGame {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  const authors = await graphql(`
    {
      allSanityAuthor {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  const events = await graphql(`
    {
      allSanityEvent {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  const blogPosts = await graphql(`
    {
      allSanityBlogPost {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  const generatePage = (data, templatePath) => {
    data.forEach((element) => {
      createPage({
        path: element.slug.current,
        component: require.resolve(templatePath),
        context: {
          slug: element.slug.current,
        },
      });
    });

    if (data.errors) {
      reporter.panic('Failed to create posts', pagesResults.errors);
    }
  };

  generatePage(games.data.allSanityGame.nodes, `./src/templates/game.js`);
  generatePage(authors.data.allSanityAuthor.nodes, `./src/templates/author.js`);
  generatePage(blogPosts.data.allSanityBlogPost.nodes, `./src/templates/blogPost.js`);
  generatePage(events.data.allSanityEvent.nodes, `./src/templates/event.js`);
};
