import React from 'react';
import { Link } from 'gatsby';

import NavBar from '../navbar/navbar.component';
import Footer from '../footer/footer.component';

const blogTemplate = ({ article, articleData }) =>  {
  return (
    <div>
      <NavBar />
      <div style={{ width: 960, margin: '4rem auto' }}>
        <img src={article.cover_image} alt={article.name} />
        <h1>{article.title}</h1>
        <div dangerouslySetInnerHTML={ {__html: articleData.body_html} } className="innerhtml"/>

      </div>
      <Footer />
    </div>
  )};

export default blogTemplate;