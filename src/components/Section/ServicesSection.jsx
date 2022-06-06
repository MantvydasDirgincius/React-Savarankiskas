import { useState, useEffect } from 'react';
import SectionTitle from './SectionTitle';
import ServisesList from './ServicesList';

export default function ServicesSection() {
  const [data, setData] = useState([]);

  async function getServices() {
    const resp = await fetch('data/services.json');
    const dataInJs = await resp.json();
    setData(dataInJs);
  }

  useEffect(() => {
    getServices();
  }, []);

  return (
    <section>
      <SectionTitle title='OUR SERVICES' subtitle='Lorem ipsum dolor sit amet.' />
      {data.map((card) => {
        return <ServisesList key={card.id} title={card.title} subtitle={card.summary} icon={card.icon} />;
      })}
    </section>
  );
}
