export default function Card({ img, title, props }) {
  return (
    <div className='card'>
      <img className='img' src={img} alt='house' />
      <div className={props.class === 'Down right' ? 'downBlackDiv' : 'blackDiv'}>
        <p>{title}</p>
      </div>
    </div>
  );
}
