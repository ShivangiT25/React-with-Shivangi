import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
  <footer className="footer">
    <div className="last">
      <div className="training">
        <div className="training-blog">
          <span>
            <h3>Training</h3>
          </span>
          <span className="blog-text">
            <h3>Blog</h3>
          </span>
        </div>
        <p>
          Welcome to our technical blog, where we delve into the world of
          cutting-edge technologies and explore their practical applications.
        </p>
      </div>
    </div>
    <div className="category">
      <h4>CATEGORY</h4>
      <ul className="list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JAVASCRIPT</li>
        <li>VSCODE</li>
      </ul>
    </div>
    <div className="touch">
      <h4>GET IN TOUCH</h4>
      <ul className="details">
        <li>+91-8XXX-XXX-XX</li>
        <li>demo@gmail.com</li>
      </ul>
    </div>
    <div className="follow">
      <h4>FOLLOW US ON</h4>
      <div className="icon-container">
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-linkedin-in" />
      </div>
    </div>
  </footer>
  <div className="blank3" />
  <div className="lastline">
    © 2024 TRAININGBLOG
    <div className="love">MADE WITH ❤️ MOHALI, INDIA</div>
  </div>
</>

  )
}

export default Footer