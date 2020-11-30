import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import './blog.template.styles.css'

let name = "Test"
console.log(name)
const BlogTemplate = () =>  {
  const [articleData, setArticleData] = useState('Test');
  const articleLink = window.location.href.slice(27)
  
  useEffect(() => {
    async function fetchArticleData() {
        await fetch(`https://dev.to/api/articles/aswaff/${articleLink}`)
            .then(response => response.json())
            .then(data => setArticleData(data))

    } fetchArticleData()
}, []);








  return (
    <div className="article-wrapper">
        <div className="article-image"><img src={articleData.cover_image} alt={articleData.name} /></div>
        <div className="article-title"><h1>{articleData.title}</h1></div>
        <div className="article-info">
          <img className="article-profile-pic" src={articleData.user?.profile_image_90} alt="profile" />
          <span className="article-arthur"><a href={articleData.url}>{articleData.user?.name}</a> </span>
          <span className="publish-date">— {articleData.readable_publish_date}</span></div>
        <div dangerouslySetInnerHTML={ {__html: articleData.body_html} } className="innerhtml"/>
        
    </div>
  )};

export default BlogTemplate;