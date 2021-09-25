// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://117.50.59.197:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'],
        singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: 'tw1277608840@163.com',
        //   password: '1277608840Tw'
        // }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/**/*.md',
        remark: {
          // remark options
        }
      }
    }
  ],
  templates: {
    StrapiPost: [{
      path: '/post/:id',
      component: './src/templates/Post.vue'
    }],
    StrapiTag: [{
      path: '/tag/:id',
      component: './src/templates/Tag.vue'
    }]
  }
}
