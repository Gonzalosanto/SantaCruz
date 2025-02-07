import React from 'react';
import './AboutMe.css';

const AboutMe = ({img, title, subtitle, description}) => {
  return (
    <div className='about-me'>
      <div className='about-me__img'>
        <img src={img} alt="Mi imagen" />
      </div>
      <div className='about-me__info'>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutMe;
