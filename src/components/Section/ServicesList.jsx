import Icon from '../UI/Icon';
import ServicesCard from './ServiceCard';

export default function ServisesList({ title, subtitle, icon }) {
  return (
    <div className='grid'>
      <ServicesCard title={title} subtitle={subtitle} icon={icon} />
    </div>
  );
}
