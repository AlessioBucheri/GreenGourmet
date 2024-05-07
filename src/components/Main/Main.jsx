import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <main>
      <div className='main--content'>
        <div className='main--text'>
          <h1 className='main--title'>The Best Green recipes at home!</h1>
          <p className='main--description'>
            Get the freshest veggie recipes for your family and friends. Start
            now by typing in your ingredients and enjoy!
          </p>
        </div>
        <img
          className='main--image'
          src='./src/images/veggy-ingredients.jpg'
          alt='Vegetarian Food Image'
        />
      </div>
    </main>
  );
}
