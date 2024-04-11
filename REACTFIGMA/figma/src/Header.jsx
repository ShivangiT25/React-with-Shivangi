import React from 'react'
import './Header.css'
import img2 from './assets/file.jpg'

const Header = () => {
  return (
    <div className="allheader">
    <div className="chatterly">
      <h2>
        Chatterly
        <sup>
          <span className="material-symbols-outlined">forum</span>
        </sup>
      </h2>
      <div className="user">
        <img className="shiv" src={img2} alt="image" />
        <select id="shivangi">
          <option value="Shivangi Thakur">Shivangi Thakur</option>
        </select>
      </div>
    </div>
    <hr className="hr1" />
    <header className="header">
      <div className="filter">
        <p>Filters</p>
      </div>
      <div className="blank" />
      <div className="create">
        <h4>Created By</h4>
        <select>
          <option>All</option>
        </select>
      </div>
      <div className="dating">
        <h4>Published Date</h4>
        <select>
          <option>Select Date</option>
        </select>
      </div>
      <div className="search">
        <h4>Search</h4>
        <div className="search-input">
          <input type="text" placeholder="Type here..." />
          {/* <button class="material-symbols-outlined icon">
        search
    </button> */}
        </div>
      </div>
    </header>
  </div>
  )
}

export default Header