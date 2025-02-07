import React from 'react';
import './Body.css';

import Projects from '../projects/Projects';
import AboutMe from '../about/AboutMe';

const Body = () => {
  const description = "Short description about my professional career as software developer";

  return (
    <>
      <div className="about">
        <AboutMe img={"./src/assets/imgs/gonzalo.jpg"} title={"Gonzalo Santa Cruz"} subtitle={"Fullstack developer"} description={description} />
      </div>
      <Projects />
    </>
  );
};

export default Body;