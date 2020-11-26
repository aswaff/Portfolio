const fetch = require('node-fetch')

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

 