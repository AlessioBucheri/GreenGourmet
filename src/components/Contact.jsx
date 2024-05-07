import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className='contact--container'>
      <h1 className='contact--title'>Keep in Touch!</h1>
      <p>You can find me here:</p>
      <ol className='contact--list'>
        <li>
          {" "}
          <img
            className='email--icon'
            src='.\src\images\email--icon.png'
            alt='Email Icon'
          />
          alessio.j.1993@gmail.com
        </li>
        <li>
          <img
            className='github--icon'
            src='.\src\images\github-logo.png'
            alt='Github Icon'
          />
          <a
            href='https://github.com/AlessioBucheri'
            target='blank'
            rel='noreferrer noopen'
          >
            AlessioBucheri
          </a>
        </li>
        <li className='linkedin--contact'>
          <img
            className='linkedin--icon'
            src='.\src\images\linkedin--icon.png'
            alt='Linkedin Icon'
          />
          <a
            href='https://www.linkedin.com/in/alessio-bucheri-462721214/'
            target='blank'
            rel='noreferrer noopen'
          >
            Alessio Bucheri
          </a>
        </li>
      </ol>
    </div>
  );
}

export default Contact;
