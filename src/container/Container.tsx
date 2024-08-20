import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components';
import { HomePage, UnitDetailPage, UnitsPage } from '../pages';

export const Container = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="units" element={<UnitsPage />} />
          <Route path="units/:unitId" element={<UnitDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
