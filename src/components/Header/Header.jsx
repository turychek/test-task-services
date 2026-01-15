import Button from '../Button/Button';
import Nav from '../Nav/Nav';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import logo from '../../assets/images/logo.png';
import styles from './Header.module.scss';
import PhoneIcon from 'icons/Phone';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <img
              src={logo}
              alt="Plumbing Services logo"
              className={styles.icon}
            />
            <p>
              PLUMBING
              <span>SERVICES</span>
            </p>
          </div>

          <div className={styles.desktopNav}>
            <Nav />
            <div className={styles.actions}>
              <div className={styles.contacts}>
                <PhoneIcon />
                <span className={styles.phone}>
                  24/7 Emergency Call
                  <br />
                  <strong>123-456-7890</strong>
                </span>
              </div>
              <Button>Get a Quote</Button>
            </div>
          </div>

          <div className={styles.mobileMenu}>
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
