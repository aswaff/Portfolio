import React from "react";
import { render } from "react-dom"
import NavBar from "../components/navbar/navbar.component";
import './index.styles.css'
import Title from "../components/Title/title";
import Footer from '../components/footer/footer.component';

export default function Home() {
  return (
  <div>
    <NavBar />
    <Title />
    <Footer />
  </div>
  )
}
