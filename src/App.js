import { useState } from 'react';
import './App.css';
import CardList from './components/CardList';
import ProjectTitle from './components/ProjectTitle';

function App() {
  const [ats, setAts] = useState('Up left');
  return (
    <div className='App container'>
      <ProjectTitle ats={(ats) => setAts(ats)} />
      <CardList class={ats} />
    </div>
  );
}

export default App;
