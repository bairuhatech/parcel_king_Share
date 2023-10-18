import React from 'react'
import Header from "../../../component/websiteHeader";
import Footer from "../../../component/websiteFooter";


const Blog = () => {
    const style = {
        background: "linear-gradient(208deg, #3d5877 0%, #151e29 100%)",
      };
      return (
        <>
          <Header bgColor={style.background} />
          <br />
          <br />
          <br />
          <Footer />
    </>
  );
}

export default Blog