import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt='' />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>
              About <span className='text-blue'>ReadHub</span>
            </h2>
            <p className='fs-17'>
              Welcome to ReadHub, your ultimate destination for exploring the literary world! Our innovative book app provides you with a
              seamless and enriching experience to dive into the realm of books. With ReadHub, you can effortlessly search for a wide array of
              books using the Open Library API, allowing you to access a vast collection of titles and their intricate details at your fingertips.
              Whether you're seeking classic literature, contemporary fiction, or insightful non-fiction, our platform caters to diverse reading
              preferences. But that's not all.
            </p>
            <p className='fs-17'>
              ReadHub goes beyond mere searching. Our recommendation feature utilizes the power of subject-based suggestions, helping you
              discover new reads that align with your interests. Embark on a journey of literary exploration with ReadHub and unlock a world
              of knowledge and imagination like never before. Happy reading!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
