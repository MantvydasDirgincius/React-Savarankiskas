export default function Contact({ title, subtitle, orangeClass }) {
  return (
    <div className='contact'>
      <h4>{title}</h4>
      <p className={orangeClass ? 'orange' : ''}>{subtitle}</p>
    </div>
  );
}
