import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        // add singleton
        .title('Settings')
        .child(S.editor().schemaType('siteSettings').documentId('siteSettings')),
      // manually group elements
      S.listItem()
        .title('Team')
        .child(
          S.list()
            .title('Team')
            .items([
              S.listItem()
                .title('Team members')
                .schemaType('author')
                .child(S.documentTypeList('author').title('Team members')),
              S.listItem().title('Roles').schemaType('role').child(S.documentTypeList('role').title('Roles')),
            ])
        ),
      S.listItem()
        .title('Blog')
        .child(
          S.list()
            .title('Blog')
            .items([
              S.listItem()
                .title('All blog post')
                .schemaType('blogPost')
                .child(S.documentTypeList('blogPost').title('All blog posts')),
              S.listItem()
                .title('Categories')
                .schemaType('category')
                .child(S.documentTypeList('category').title('category')),
              // dynamically create a list with GROQ filters
              S.listItem()
                .title('Blog Posts by Category')
                .child(
                  S.documentTypeList('category')
                    .title('Blog Posts by category')
                    .child((categoryId) =>
                      S.documentList()
                        .title(`Blog posts in: category`) // todo how to make category name dynamic?
                        .filter('_type == "blogPost" && $categoryId == category._ref')
                        .params({ categoryId })
                    )
                ),
            ])
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'author', 'role', 'blogPost', 'category'].includes(listItem.getId())
      ),
    ]);
