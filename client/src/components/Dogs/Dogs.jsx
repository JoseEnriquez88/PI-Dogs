import Home from "../Home/Home.jsx";
import style from './Dogs.module.css';

const Dogs = ({ dogs }) => {
    return (
        <div className={style.dogCards}>
            {
                dogs.map(({ id, image, name, temperament, weight }) => {
                    return(
                        <Home 
                            key={id}
                            image={image.url}
                            name={name}
                            temperament={temperament}
                            weight={weight.metric}
                        />
                    )
                })
            }
        </div>
    );
};

export default Dogs;
