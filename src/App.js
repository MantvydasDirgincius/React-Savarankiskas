import './App.css';
import Aside from './components/Aside/Aside';
import Form from './components/Form/Form';
import MoreInfo from './components/MoreInfo/MoreInfo';
import SectionTitle from './components/SectionTitle/SectionTitle';

function App() {
  return (
    <div className='App container'>
      <SectionTitle />
      <div className='mainGrid'>
        <Form />
        <div>
          <Aside />
          <MoreInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
