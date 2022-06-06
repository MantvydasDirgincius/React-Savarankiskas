import house1 from '../assets/img/house1.jpeg';
import house2 from '../assets/img/house2.jpeg';
import house3 from '../assets/img/house3.jpeg';
import house4 from '../assets/img/house4.jpeg';
import house5 from '../assets/img/house5.jpeg';
import house6 from '../assets/img/house6.jpeg';
import house7 from '../assets/img/house7.jpeg';
import house8 from '../assets/img/house8.jpeg';
import Card from './Card';

const obj = [
  {
    id: 1,
    img: house1,
    title: 'Summer House',
  },
  {
    id: 2,
    img: house2,
    title: 'Brick House',
  },
  {
    id: 3,
    img: house3,
    title: 'Renovated',
  },
  {
    id: 4,
    img: house4,
    title: 'Barn House',
  },
  {
    id: 5,
    img: house5,
    title: 'Summer House',
  },
  {
    id: 6,
    img: house6,
    title: 'Brick House',
  },
  {
    id: 7,
    img: house7,
    title: 'Renovated',
  },
  {
    id: 8,
    img: house8,
    title: 'Barn House',
  },
];
export default function CardList(props) {
  return (
    <div className='cardList'>
      {obj.map((obj) => (
        <Card key={obj.id} img={obj.img} title={obj.title} props={props} />
      ))}
    </div>
  );
}
