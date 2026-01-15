import Header from '../../components/Header/Header';
import css from './HomePage.module.scss';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';

export default function HomePage() {
  return (
    <section className={css.containerHome}>
      <Header />
      <Hero />
      <Services />
    </section>
  );
}
