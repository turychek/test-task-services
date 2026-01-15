import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../src/layouts/SharedLayout/SharedLayout.jsx';
// import Loader from '../src/components/Loader/Loader.jsx';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage.jsx'));

export default function App() {
  return (
    <>
      <Suspense fallback={'...loader'}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
