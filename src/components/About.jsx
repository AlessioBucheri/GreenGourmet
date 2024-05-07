import React from "react";
import "./About.css";

function About() {
  return (
    <div className='about--wrapper'>
      <div className='about--container--one'>
        <h1 className='about--title'>
          What is{" "}
          <span className='about--title--section'>
            <span className='logo--title--green'>Green</span>
            <span className='logo--title--gourmet'>Gourmet</span>
          </span>
          ?
        </h1>
      </div>
      <div className='about--container--two'>
        <p className='about--description'>
          Welcome! I'm Alessio, and this is my first <strong>React App</strong>
          Inspired by my girlfriend's passion for vegetarian cuisine and the
          convenience of services like HelloFresh.
        </p>
        <p className='about--description'>
          Fully developed in React and JavaScript, GreenGourmet is a
          user-friendly web application designed to assist novice cooks like
          myself in the kitchen. <br />
          Users can easily search for recipes using their favorite ingredients
          and follow them to cook like a true chef.
        </p>
      </div>
    </div>
  );
}

export default About;
