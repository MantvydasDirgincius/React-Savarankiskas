import { useState } from 'react';

export default function ProjectTitle(props) {
  const [buttonText, setButtonText] = useState('Down right');

  function changeText() {
    return buttonText === 'Down right' ? setButtonText('Up left') : setButtonText('Down right');
  }

  return (
    <div className='titleSection'>
      <h1>Projects</h1>
      <button
        className='btn'
        onClick={() => {
          changeText();
          props.ats(buttonText);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}
