import styles from './ServiceCard.module.scss';

export default function ServiceCard({ icon, title, alt }) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={alt || title} className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </div>
  );
}
