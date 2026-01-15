import emergencyIcon from '../../assets/images/services/emergencyRepairs.png';
import drainIcon from '../../assets/images/services/cleaning.png';
import heaterIcon from '../../assets/images/services/waterHeaterps.png';
import leakIcon from '../../assets/images/services/leakDetection.png';

import ServiceCard from '../ServiceCard/ServiceCard';
import styles from './Services.module.scss';

export default function Services() {
  return (
    <div className={styles.background}>
      <section className={styles.services}>
        <ServiceCard icon={emergencyIcon} title="Emergency Repairs" />
        <ServiceCard icon={drainIcon} title="Drain Cleaning" />
        <ServiceCard icon={heaterIcon} title="Water Heaters" />
        <ServiceCard icon={leakIcon} title="Leak Detection & More" />
      </section>
    </div>
  );
}
