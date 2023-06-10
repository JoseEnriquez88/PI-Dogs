import React, { useEffect, useState, useCallback } from "react";
import style from './carousel.module.css';

import borderCollie from '../../assets/landingDogs/borderCollie.jpg';
import perroEnBosque from '../../assets/landingDogs/perroEnBosque.jpg';
import perroEnNaturaleza from '../../assets/landingDogs/perroEnNaturaleza.jpg';
import perros from '../../assets/landingDogs/perros.jpg';
import perrosAmigos from '../../assets/landingDogs/perrosAmigos.jpg';
import perrosDesierto from '../../assets/landingDogs/perrosDesierto.jpg';
import tresPerrosLago from '../../assets/landingDogs/tresPerrosLago.jpg';

const Carousel = (props) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(props.images[0]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const images = [
        borderCollie,
        perroEnBosque,
        perroEnNaturaleza,
        perros,
        perrosAmigos,
        perrosDesierto,
        tresPerrosLago
    ];

    const selectNewImage = useCallback((index, images, next = true) => {
        setIsTransitioning(true);
        const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
        
        setTimeout(() => {
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
            setIsTransitioning(false);
        }, 500); // Tiempo de transición (ajusta según tus necesidades)
    }, [selectedIndex]);

    useEffect(() => {
        if (props.autoplay || !props.showButtons) {
            const interval = setInterval(() => {
                selectNewImage(selectedIndex, props.images);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [props.autoplay, props.images, props.showButtons, selectNewImage, selectedIndex]);

    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, images);
    };

    return (
        <div className={style.imgContainer}>
            <img
                src={selectedImage}
                alt='Dogs'
                className={`${style.img} ${isTransitioning ? style.fadeOut : style.fadeIn}`}
            />

            <div className={style.btnCntnr}>
                {props.showButtons ? (
                    <>
                        <button className={style.btns} onClick={previous}>{'<'}</button>
                        <button className={style.btns} onClick={next}>{'>'}</button>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default Carousel;
