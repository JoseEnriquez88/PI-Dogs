import style from './landing.module.css';

const LandingPage = () => {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.content}>
                    <h1 className={style.h1}>Esto es landing page</h1>
                    <p className={style.p}>y este es una etiqueta p</p>
                    <button className={style.btn} >HOME</button>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;