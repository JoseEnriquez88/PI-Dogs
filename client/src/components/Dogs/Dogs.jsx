import Home from "../Home/Home.jsx";
import style from './dogs.module.css';

const Dogs = ({ dogs }) => {
    return (
        <div className={style.dogCards}>
            {
                dogs.map(({ id, image, name, temperament, weight }) => {
                    return(
                        <Home 
                            key={id}
                            image={image}
                            name={name}
                            temperament={temperament}
                            weight={weight}
                        />
                    )
                })
            }
        </div>
    );
};

export default Dogs;
