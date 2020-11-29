import React, { useState, useEffect } from 'react'
// import { Link } from 'gatsby'
import { Router } from "@reach/router"
import { Link } from "gatsby"

import BlogTemplate from './blog.template';
import { render } from 'react-dom';
import './blog.component.styles.css'

const axios = require('axios');

// import blogData from './blog.data'


// This loads the data for the 
export default function Blog() {
    const [blogData, setBlogData] = useState(['']);
    
    useEffect(() => {
        async function fetchData() {
            await axios.get("https://dev.to/api/articles?username=aswaff")
                .then(data => setBlogData(data.data));

        } fetchData()
    }, []);

    
    let Home = () => {
        return( 
        blogData.map(a =>
            <div className="articlewrapper">
                <Link to={`/blog/${a.slug}`} ><div className="articletitle">{a.title}</div></Link>
                <p className="articledesc">{a.description}</p>
           
                
            </div>)
            
        )}


    let Article = () => {
        return(
            <BlogTemplate />
        )}
        
    

     return (
            
                    
                    <Router basepath="/blog">
                        <Home path="/" />
                        <Article path="/:userId" />
                    </Router>
        )
        
            
            
    }
    // {`/blog/${a.slug}`}





// https://github.com/geocine/gatsby-starter-devto
// https://github.com/geocine/gatsby-source-dev
// https://medium.com/@christinavhastenrath/rest-apis-in-gatsby-at-runtime-89a89dd976d7

// https://www.gatsbyjs.com/blog/2018-10-25-using-gatsby-without-graphql/
// https://github.com/jlengstorf/gatsby-with-unstructured-data/blob/master/src/templates/pokemon.js
// https://www.pluralsight.com/guides/return-html-elements-in-json

// export default async function Blog() {
//     const blogData = await fetch("https://dev.to/api/articles?username=aswaff");
//     return (
//             blogData.map(a => 
//                 <h1>{a.title}, <p>{a.description}</p><Link to= {`/blog/${a.slug}`} >Link to article</Link> </h1>
            
//             )

//     )}