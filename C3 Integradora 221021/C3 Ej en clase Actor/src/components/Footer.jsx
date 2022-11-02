import React from 'react';
import { generalInformation } from './db';

// console.log(generalInformation);

const [{ nationality, age }] = generalInformation;

// console.log(nationality);
// console.log(age);

const Footer = () => {
  return (
    <footer>
        <h3>Nacionalidad:</h3>
       <p>{nationality} </p>
        <h3>Edad:</h3>
       <p>{age} </p>
    </footer>
  )
}

export default Footer