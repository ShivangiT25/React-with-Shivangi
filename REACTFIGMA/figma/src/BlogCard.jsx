import React from 'react'
import img from './assets/coding.jpg'
import './BlogCard.css'
import img2 from './assets/file.jpg'
// const image = './assets/file.jpg'

const BlogCard = ({description, name}) => {
  return (
    <div className="mmm">
  <div className="imagecontainer">
    <img src={img} alt="image" />
    <h2>{description}</h2>
    <div className="blank2" />
    <div className="footercontainer">
      <div className="imagefooter">
        <img src={img2} alt="" />
      </div>
      <div className="footertext">
        <div className="dasteen">
          <h4>{name}</h4>
        </div>
        <div className="postdate">
          <p>Mar 10, 2024</p>
        </div>
      </div>
      <div className="heart">
        <i className="fa-solid fa-heart" /> 03
      </div>
      <div className="comment">
        <i className="fa-solid fa-comment-dots" /> 12
      </div>
    </div>
  </div>
</div>
  )
}

export default BlogCard