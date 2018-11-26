module.exports = {
  siteName: 'Gridsome NetlifyCMS Starter Kit',
  siteUrl: 'https://www.gridsome.org',
  siteDescription: 'Gridsome is a blazing-fast static site generator...',
  titleTemplate: `%s - Gridsome`,
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [{
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/blog/:slug',
        remark: {
          plugins: [
            // ... local plugins
          ]
        }
      }
    },
    // {
    // 	use: '@gridsome/source-filesystem',
    // 	options: {
    // 		path: 'data/*.yml',
    // 	}
    // }
  ]
}
