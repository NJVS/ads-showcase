import styles from './Navbar.module.scss';
import {ReactComponent as Logo} from 'assets/images/w-logo.svg';

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <a href="#" className={styles.nav_logo}>
          <Logo />
        </a>
        <ul className={styles.nav_menu}>
          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
        </ul>
        <button className={styles.menu_toggler}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar