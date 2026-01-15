import React from 'react';
import styles from './Nav.module.scss';

export default function Nav({ isOpen, onClose, children }) {
  return (
    <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
      <ul>
        <li>
          <a href="/" onClick={onClose}>
            Home
          </a>
        </li>
        <li>
          <a href="/" onClick={onClose}>
            About
          </a>
        </li>
        <li>
          <a href="/" onClick={onClose}>
            Services
          </a>
        </li>
        <li>
          <a href="/" onClick={onClose}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
