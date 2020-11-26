import React from "react";
import NavBar from "../../components/navbar/navbar.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.styles.css'
import Blog from '../../components/blog/blog.component'
import Footer from '../../components/footer/footer.component';

export default function BlogPage() {
    return (
    <div>
      <NavBar />
      <Blog />
      <Footer />
    </div>
    )
  }