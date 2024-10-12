import React from 'react';

function Contenedor({ children }) {
  const estilo = {
    border: '2px solid black',
    padding: '80px',
    margin: '10px',
    borderRadius: '80px',
    textalign: 'center',
  };
  return <div style={estilo}>{children}</div>;
}

export default Contenedor;