exports.createPages = async ({ actions: { createPage } }) => {
    const allArticles = await fetch("https://dev.to/api/articles?username=aswaff").then(response => response.json())
    // Create a page for each article.
    allArticles.forEach(article => {
      createPage({
        path: `/blog/${article.slug}/`,
        component: require.resolve('./src/components/blog/blog.template.js'),
        context: { article },
      })
    })
  }