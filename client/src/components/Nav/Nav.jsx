import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';

const Nav = ({ onSearch }) => {
  return (
    <nav className={style.navbar}>
      <div className={style['navbar-container']}>
        <Link to="/" className={style['navbar-logo']}>
          Logo
        </Link>
        <SearchBar onSearch={onSearch} />
        <ul className={style['navbar-menu']}>
          <li className={style['navbar-item']}>
            <Link to="/home" className={style['navbar-link']}>
              Home
            </Link>
          </li>
          <li className={style['navbar-item']}>
            <Link to="/about" className={style['navbar-link']}>
              About
            </Link>
          </li>
          <li className={style['navbar-item']}>
            <Link to="/contact" className={style['navbar-link']}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
