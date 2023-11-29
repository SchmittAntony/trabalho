import React, { useState } from 'react';
import './JavaScript.css'

const JavaScriptPage: React.FC = () => {
  const [contador, setContador] = useState(0)

  return (
    <section id="JavaScript" className='main-Java'>
      <div>
        <h2 className='title_java'>JavaScript</h2>
      </div>
      <div className='div_contador'>
        <h1> Você clicou {contador} vezes </h1>
        <button
        className='button_contador'
        onClick={() => setContador(contador +1)}>clicar</button>
      </div>
    </section>
  );
};

export default JavaScriptPage;