import Contact from '../UI/Contact';

export default function Aside() {
  const contactArr = [
    { id: 1, title: 'Address', subtitle: 'Vilnius, pavasario gatve, 5' },
    { id: 2, title: 'Phone', subtitle: '+3705320492304', orangeClass: true },
    { id: 3, title: 'Email Address', subtitle: 'blabla@gmail.com', orangeClass: true },
  ];

  return (
    <div className='aside'>
      {contactArr.map((contactCard) => {
        return (
          <Contact
            key={contactCard.id}
            title={contactCard.title}
            subtitle={contactCard.subtitle}
            orangeClass={contactCard.orangeClass}
          />
        );
      })}
    </div>
  );
}
