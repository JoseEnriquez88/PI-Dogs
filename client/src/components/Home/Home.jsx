import style from './home.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../../redux/actions';

const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector(state => state.breeds);

  useEffect(() => {
    dispatch(getAllDogs());
  }, [dispatch]);

  return (
    <div className={style.Container}>
      {dogs.map((dog) => (
        <div key={dog.id}>
          <img src={dog.image} alt={dog.name} />
          <h1>Nombre: {dog.name}</h1>
          <h2>Temperamentos: {dog.temperament?.join(', ')}</h2>
          <h2>Peso: {dog.weight}</h2>
          <Link to={`/detail/${dog.id}`}>
            <button>Haz click para más detalle</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
