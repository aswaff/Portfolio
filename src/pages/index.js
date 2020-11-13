import React from "react"
import { render } from "react-dom"
import NavBar from "../components/navbar/navbar.component"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
  <div>
    <NavBar />
    <div>Hello world!</div>
  </div>
  )
}
