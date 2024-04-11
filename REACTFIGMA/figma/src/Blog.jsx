import React from 'react'
import './Blog.css'
import BlogCard from './BlogCard'
// import './BlogCard.css'/className

const Blog = () => {
  return (
    <div>
    <h2>Blog Posts</h2>
    <div className='mainfinal'>
    <BlogCard description="How to make GUI in Java with example" name="Shivangi"/>
    <BlogCard description="Make animated light mode and dark mode toggle with CSS" name="Muskan"/>
    <BlogCard description="Make tictoe games with ReactJS" name="Tanya"/>
    <BlogCard description="How to make GUI in Java with example" name="Shivangi"/>
    <BlogCard description="Make animated light mode and dark mode toggle with CSS" name="Muskan"/>
    <BlogCard description="Make tictoe games with ReactJS" name="Tanya"/>
    <BlogCard description="How to make GUI in Java with example" name="Shivangi"/>
    <BlogCard description="Make animated light mode and dark mode toggle with CSS" name="Muskan"/>
    <BlogCard description="Make tictoe games with ReactJS" name="Tanya"/>
    </div>
    </div>
  )
}

export default Blog