import React from 'react'

import blogData from './blog.data'

export default function Blog() {
    return (
            blogData.map(a => 
                <h1>{a.title}, <p>{a.description}</p></h1>
            
            )

    )}





// https://github.com/geocine/gatsby-starter-devto
// https://github.com/geocine/gatsby-source-dev
// https://medium.com/@christinavhastenrath/rest-apis-in-gatsby-at-runtime-89a89dd976d7

// https://www.gatsbyjs.com/blog/2018-10-25-using-gatsby-without-graphql/
// https://github.com/jlengstorf/gatsby-with-unstructured-data/blob/master/src/templates/pokemon.js