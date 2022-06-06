export default function SectionTitle({ title, subtitle }) {
  return (
    <div className='sectionTitle'>
      <h1 className='title'>{title}</h1>
      <p className='subtitle'>{subtitle}</p>
    </div>
  );
}
