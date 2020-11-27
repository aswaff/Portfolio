const fetch = require('node-fetch')


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/app` page.
  if (page.path.match(/^\/blog/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/blog/*"
    // Update the page.
    createPage(page)
  }
}








// exports.createPages = async ({ actions: { createPage } }) => {
//     const allArticles = await fetch("https://dev.to/api/articles?username=aswaff").then(response => response.json())
//     const articleId = allArticles.map(article => article.id)
//     const articleData = await fetch(`https://dev.to/api/articles/${articleId}`).then(response => response.json())
//     // Create a page for each article.
//     allArticles.forEach(article => {
//       createPage({
//         path: `/blog/${article.slug}/`,
//         component: require.resolve('./src/components/blog/blog.template.js'),
//         context: { article, articleData },
//       })
//     })
//   }

 