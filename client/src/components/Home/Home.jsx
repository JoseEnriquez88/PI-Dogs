import { useState, useEffect } from "react";
import axios from "axios";

const URL = 'https://api.thedogapi.com/v1/breeds';
const KEY = 'live_nifuOODQBUSjGM48Pq5GliNRyFopVSjZ3S2Qh4zmx2CWOCxuxWnHYDkUEIDMDIYv';

const Home = ({ id, image, name, height, weight, temperament, life_span }) => {
    const [dogs, setDogs] = useState([]);
    const [filteredDogs, setFilteredDogs] = useState([]);
    const [temperamentFilter, setTemperamentFilter] = useState('');
    const [originFilter, setOriginFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const dogsPerPage = 8;

    useEffect(() => {
        // Lógica para cargar los primeros resultados desde GET /dogs
        // y establecer los datos en el estado "dogs"
        // Ejemplo de cómo puedes usar fetch:
        axios(URL)
            .then(response => response.json())
            .then(data => setDogs(data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        // Lógica para filtrar y ordenar los perros según los filtros seleccionados
        let filteredResult = dogs;

        if (temperamentFilter !== '') {
            filteredResult = filteredResult.filter(dog => dog.temperament.includes(temperamentFilter));
        }

        if (originFilter !== '') {
            filteredResult = filteredResult.filter(dog => dog.origin === originFilter);
        }

        const sortedResult = filteredResult.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

        setFilteredDogs(sortedResult);
        setCurrentPage(1); // Reiniciar la página actual al aplicar nuevos filtros y ordenación
    }, [dogs, temperamentFilter, originFilter, sortOrder]);

    const handleDogCardClick = (dogId) => {
        // Lógica para redirigir al detalle de la raza específica
        // Puedes usar una librería de enrutamiento como react-router-dom
        // para manejar la navegación y pasar el dogId como parámetro de ruta
    };

    const handleTemperamentFilterChange = (event) => {
        setTemperamentFilter(event.target.value);
    };

    const handleOriginFilterChange = (event) => {
        setOriginFilter(event.target.value);
    };

    const handleSortOrderChange = (event) => {
        setSortOrder(event.target.value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Cálculos para la paginación
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = filteredDogs.slice(indexOfFirstDog, indexOfLastDog);

    // Renderización de las cards de perros
    const dogCards = currentDogs.map(dog => (
        <div key={dog.id} className="dog-card" onClick={() => handleDogCardClick(dog.id)}>
            <img src={dog.image} alt={dog.name} />
            <h3>{dog.name}</h3>
            <p>Temperamentos: {dog.temperament.join(', ')}</p>
            <p>Peso: {dog.weight}</p>
        </div>
    ));
};

export default Home;