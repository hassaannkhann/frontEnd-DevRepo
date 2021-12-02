// import logo from './logo.svg';
import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import ProductDetailPage from '../src/Pages/ProductDetailPage/PDP';
import '../src/Pages/ProductDetailPage/main.scss';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<ProductDetailPage/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
