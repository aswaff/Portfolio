import React from "react";
import { render } from "react-dom"
import NavBar from "../components/navbar/navbar.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.styles.css'
import Title from "../components/Title/title";

export default function Home() {
  return (
  <div>
    <NavBar />
    <Title />
  </div>
  )
}
