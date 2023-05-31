import Home from "../Home/Home";
import style from './Dogs.module.css';

const Dogs = ({ dogs }) => {
    return(
        <div className={style.dogCards}>
            {dogs.map(({ id, image, name, height, weight, temperament, life_span }) => {
                return(
                    <Home 
                        key={id}
                        id={id}
                        image={image}
                        name={name}
                        height={height}
                        weight={weight}
                        temperament={temperament}
                        life_span={life_span}
                    />
                )
            })}
        </div>
    );
};

export default Dogs;