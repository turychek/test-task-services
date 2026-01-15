import PhoneIcon from 'icons/Phone';
import Button from '../Button/Button';
import styles from './Hero.module.scss';
import mainImg from 'assets/images/plumbers.png';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.mainBlock}>
          <div className={styles.content}>
            <h1>Reliable Plumbing Services</h1>
            <p>Your Trusted Local Plumber</p>

            <div className={styles.buttons}>
              <Button variant="secondary">Request Service</Button>
              <Button variant="outline">
                <p>Call Now</p>
                <div className={styles.phone}>
                  <PhoneIcon />
                  <span>123-456-7890</span>
                </div>
              </Button>
            </div>
          </div>
          <img src={mainImg} alt="man" />
        </div>
      </div>
    </section>
  );
}
