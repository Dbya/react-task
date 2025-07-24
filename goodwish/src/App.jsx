import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./assets/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./assets/blog/Blog";
import Singleblog from "./assets/singleBlog/Singleblog";
import Createblog from "./assets/createBlog/Createblog";
import Filtered from "./assets/filteredCard/Filtered";


const App = () => {
  
  const [blog, setBlog] = useState([]);
  const [searchData, setSearchData] = useState();
  const fetchblog = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(response.data, "i m the");
    setBlog(response.data);
    console.log(blog, "i am bog data");
  };
  useEffect(() => {
    fetchblog();
  }, []);

  

    const filteredBlogs = blog.filter((item) => {
    const searchUserId = Number(searchData);
    if (!isNaN(searchUserId)) {
      return item.userId === searchUserId;
      
    }
    
    return false;
  });
  console.log(filteredBlogs,"ma ho taile filter gareko")



  return (
    <div>
      <BrowserRouter>
        <Navbar setSearchData={setSearchData} />
        
        <Routes >
          <Route path="/" element={<Blog blog={blog} />} />
          <Route path="/singleblog/:id" element={<Singleblog />} />
          <Route path="/addblog" element={<Createblog />} />
          <Route path="/filteredblog" element={<Filtered filteredBlogs={filteredBlogs} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
