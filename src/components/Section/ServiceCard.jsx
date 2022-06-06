import Icon from '../UI/Icon';

export default function ServicesCard({ title, subtitle, icon }) {
  return (
    <div className='card'>
      <Icon icon={icon} />
      <div className='cardInfo'>
        <h4 className='cardTitle'>{title}</h4>
        <p className='cardSubtitle'>{subtitle}</p>
        <a href='#'>Learn more</a>
      </div>
    </div>
  );
}
