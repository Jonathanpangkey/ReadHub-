import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Dive into a Universe of Books: Enjoy a Wide Range of Stories and Topics in Our Extensive Collection. Let the Pages Transport You to New Adventures and Experiences, Right at Your Fingertips.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header