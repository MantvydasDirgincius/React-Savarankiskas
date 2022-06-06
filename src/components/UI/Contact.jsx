export default function Contact({ title, subtitle, orangeClass }) {
  return (
    <div className='contact'>
      <h4 className='contactTitle'>{title}</h4>
      <p className={`contactSubtitle ${orangeClass ? 'orange' : ''}`}>{subtitle}</p>
    </div>
  );
}
