import { useDispatch } from "react-redux";
import { useState } from "react";
import { getDogsByName } from "../../redux/actions";
// import style from './SearchBar.module.css';

const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  // const dogs = useSelector((state) => state.breeds)

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    dispatch(getDogsByName(name));
    setName("");
  };

  return (
    <div>
      <input
        // className={style.searchInput}
        placeholder="Buscar perro..."
        type="search"
        onChange={handleChange}
        value={name}
      />
      <button
        // className={style.searchButton}
        onClick={handleSearch}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
