import style from './home.module.css';
import { Link } from 'react-router-dom';

const Home = ({ id, image, name, temperament, weight }) => {

  return (
    <div className={style.container}>
      <img className={style.img} src={image} alt={name} />
      <h4 className={style.name}>Nombre: {name}</h4>
      <h4 className={style.temp}>Temperamentos: {temperament?.join(', ')}</h4>
      <h4 className={style.weight}>Peso: {weight}</h4>
      <Link to={`/detail/${id}`}>
        <button className={style.detail}>Detalles del perro</button>
      </Link>
    </div >
  );
};

export default Home;
