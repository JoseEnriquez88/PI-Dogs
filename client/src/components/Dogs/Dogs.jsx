import React, { useState } from 'react';
import Home from '../Home/Home.jsx';
import style from './dogs.module.css';
import Pagination from '../Pagination/Pagination';

const Dogs = ({ dogs }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 8;

    // Calcular el índice inicial y final de los perros en la página actual
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

    // Función de cambio de página
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <div className={style.dogCards}>
                {/* Mostrar los perros correspondientes a la página actual */}
                {currentDogs.map(({ id, image, name, temperament, weight }) => (
                    <Home
                        key={id}
                        image={image}
                        name={name}
                        temperament={temperament}
                        weight={weight}
                    />
                ))}
            </div>

            {/* Implementar la paginación */}
            <Pagination
                totalItems={dogs.length}
                itemsPerPage={dogsPerPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Dogs;
