import { useEffect, useState } from 'react';

import ServicesCard from './ServiceCard';

export default function ServicesCardServisesList({ classGrid }) {
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
    <div className={classGrid}>
      {data.map((card) => {
        return (
          <ServicesCard key={card.id} title={card.title} subtitle={card.summary} icon={card.icon} />
        );
      })}
    </div>
  );
}
