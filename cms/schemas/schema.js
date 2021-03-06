// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import author from './people/author';
import role from './people/role';
import game from './game';
import event from './event';
import blogPosts from './blog/blogPosts'; // should be blogPost
import category from './blog/category';
import siteSettings from './settings';
import iframe from './iframe';
import iframeGroup from './iframeGroup';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    game,
    event,
    blogPosts,
    category,
    author,
    role,
    iframe,
    iframeGroup,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    siteSettings,
  ]),
});
