import SearchBar from '../SearchBar/SearchBar';
import style from './nav.module.css';


const Nav = ({ onSearch }) => {

  return (
      <nav className={style.navbar}>

        <SearchBar onSearch={onSearch}/>
      </nav>
  );
};

export default Nav;


