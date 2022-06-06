import { useState } from 'react';
import SectionTitle from './SectionTitle';
import ServisesList from './ServicesList';

export default function ServicesSection() {
  const [buttonText, setButtonText] = useState('Two columns');

  function changeText() {
    return buttonText === 'Two columns'
      ? setButtonText('Three columns')
      : setButtonText('Two columns');
  }
  return (
    <section className='container'>
      <SectionTitle title='OUR SERVICES' subtitle='Lorem ipsum dolor sit amet.' />

      <button className='btn' onClick={changeText}>
        {' '}
        {buttonText}
      </button>

      <ServisesList classGrid={buttonText === 'Two columns' ? 'grid' : 'grid2'} />
    </section>
  );
}
