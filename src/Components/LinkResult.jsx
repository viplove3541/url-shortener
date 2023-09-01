import React, { useState } from 'react';
import '../App.css';

const LinkResult = () => {

    const [shortenLink, setShortenLink] = useState('hello');

  return (
    <div className='result'>
      <p>{shortenLink}</p>
      <button>Copy to clipboard</button>
    </div>
    
  )
}

export default LinkResult;