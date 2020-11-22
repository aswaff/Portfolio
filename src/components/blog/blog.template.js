import React from 'react';
import { Link } from 'gatsby';

export default ({ pageContext: { article } }) => (
  <div style={{ width: 960, margin: '4rem auto' }}>
    <h1>{article.name}</h1>
    <img src={article.cover_image} alt={article.name} />
    <h2>Abilities</h2>
  </div>
);