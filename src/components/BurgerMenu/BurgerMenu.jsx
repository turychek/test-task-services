import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import MenuIcon from 'icons/Menu';
import CloseIcon from 'icons/Close';
import styles from './BurgerMenu.module.scss';
import Button from '../Button/Button';
import PhoneIcon from 'icons/Phone';

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={styles.burgerMenu}>
      <button className={styles.burgerButton} onClick={toggleMenu}>
        <MenuIcon />
      </button>

      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
        onClick={closeMenu}
      />

      <div className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={closeMenu}>
          <CloseIcon />
        </button>
        <Nav isOpen={isOpen} onClose={closeMenu} />
        <div className={styles.actions}>
          <span className={styles.phone}>
            24/7 Emergency Call
            <br />
            <PhoneIcon />
            <span>123-456-7890</span>
          </span>
          <Button>Get a quote</Button>
        </div>
      </div>
    </div>
  );
}
