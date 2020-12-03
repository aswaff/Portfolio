import React from "react";
import { graphql } from "gatsby"
import NavBar from "../components/navbar/navbar.component";
import './index.styles.css'
import Title from "../components/Title/title";
import Footer from '../components/footer/footer.component';

export default function Home({data}) {
  return (
  <div>
    <NavBar />
    <Title mePic={data}/>
    <Footer />
  </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "Profile pic.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 400, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
