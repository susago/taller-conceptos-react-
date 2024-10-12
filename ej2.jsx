import React from 'react';

function Saludo({ nombre, idioma }) {
  let saludo;
  switch (idioma) {
    case 'es':
      saludo = '¡Hola';
      break;
    case 'en':
      saludo = 'Hello';
      break;
    case 'fr':
      saludo = 'Bonjour';
      break;
    case 'de':
      saludo = 'Hallo';
      break;
    default:
      saludo = '¡Hola'; 
  }

  return <h1>{saludo}, {nombre}!</h1>;
}

export default Saludo;