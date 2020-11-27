import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import NavBar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';

const BlogTemplate = () =>  {
  const [articleData, setArticleData] = useState(['']);
  const articleLink = window.location.href.slice(27)

  useEffect(() => {
    async function fetchArticleData() {
        await fetch(`https://dev.to/api/articles/aswaff/${articleLink}`)
            .then(response => response.json())
            .then(data => setArticleData(data));

    } fetchArticleData()
}, []);

  return (
    <div>
      {/* <NavBar /> */}
      <div style={{ width: 960, margin: '4rem auto' }}>
        <img src={articleData.cover_image} alt={articleData.name} />
        <h1>{articleData.title}</h1>
        <div dangerouslySetInnerHTML={ {__html: articleData.body_html} } className="innerhtml"/>
      </div>
      {/* <Footer /> */}
    </div>
  )};

export default BlogTemplate;