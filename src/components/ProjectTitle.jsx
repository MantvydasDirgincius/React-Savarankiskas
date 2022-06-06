import { useState } from 'react';

export default function ProjectTitle() {
  const [buttonText, setButtonText] = useState('Down right');

  function changeText() {
    return buttonText === 'Down right' ? setButtonText('Up left') : setButtonText('Down right');
  }

  return (
    <div>
      <h1>Projects</h1>
      <button onClick={changeText}> {buttonText}</button>
    </div>
  );
}
