import css from './SharedLayout.module.css';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div className={css.layout}>
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;
