import { useDispatch } from "react-redux";
import { useState } from "react";
import { filterDogs, orderDogs } from "../../redux/actions";

const sortDogs = () => {
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderDogs(event.target.value));
    setAux(true);
  };

  const handleFilter = (event) => {
    dispatch(filterDogs(event.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Temperamentos">Temperamentos</option>
        <option value="API">Perros de la API</option>
        <option value="Base de Datos">Perros de la Base de Datos</option>
      </select>

      <div>{}</div>
    </div>
  );
};

export default sortDogs;
