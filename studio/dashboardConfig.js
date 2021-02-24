export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60367355d39bb335c36630f7',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-y1uuyn9i',
                  apiId: 'b36d9a1e-9f7d-42f5-a3f1-0ba90926878c'
                },
                {
                  buildHookId: '6036735518bbf830520d1aae',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-q7we7jso',
                  apiId: '83e29840-df47-4466-a88a-64b6df6eb226'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/johanbijlsma/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-q7we7jso.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
