import './App.css';
import SectionTitle from './components/Section/SectionTitle';
import Icon from './components/UI/Icon';

function App() {
  return (
    <div className='App'>
      <h1>Hello again world</h1>
      <Icon icon='fa-address-book' />
      <SectionTitle title='OUR SERVICES' subtitle='Lorem ipsum dolor sit amet.' />
    </div>
  );
}

export default App;
