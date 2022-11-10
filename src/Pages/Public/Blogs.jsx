import React, { useState } from "react";
import { Link, useLoaderData } from 'react-router-dom'
import { tabTitle } from "../../utilities/titleChange";
import BlogCard from "./BlogCard";


const Blogs = () => {
  tabTitle('Blogs')

const blogs = useLoaderData()
console.log(blogs);

  return (
    <div>
      <h1>Welcome To My Blogs</h1>
      {
        blogs.map(blog => <BlogCard
        key={blog._id}
        blog={blog}
        ></BlogCard>)
      }

    </div>
  );
};

export default Blogs;
