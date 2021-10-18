import shoppingIcon from '../../assets/shopping-icon.svg';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
      <nav className={styles.nav}>
        <img className={styles.navicon} src={shoppingIcon} alt="shopping icon"/>
        <h1 className={styles.navtitle}>Shopping list</h1>
      </nav>
    );
}

export default Navbar;