import Icon from '../UI/Icon';

export default function ServicesCard({ children, title, subtitle }) {
  return (
    <div className='card'>
      {children}
      <h4 className='cardTitle'>{title}</h4>
      <p className='cardSubtitle'>{subtitle}</p>
    </div>
  );
}
