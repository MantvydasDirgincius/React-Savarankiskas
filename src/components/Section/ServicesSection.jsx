import SectionTitle from './SectionTitle';
import ServisesList from './ServicesList';

export default function ServicesSection() {
  return (
    <section className='container'>
      <SectionTitle title='OUR SERVICES' subtitle='Lorem ipsum dolor sit amet.' />

      <ServisesList />
    </section>
  );
}
