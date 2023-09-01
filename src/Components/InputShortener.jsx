import React from 'react';
import '../App.css';

const InputShortener = () => {
  return (
    <div className='input__container'>
        <h1>URL <span>Shortener</span></h1>
        <div>
            <input type="text" placeholder='Paste your link here to shorten it...' />
            <button>shorten</button>
        </div>
     </div>
  )
}

export default InputShortener;