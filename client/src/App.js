import React from 'react';
import {Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import Update from './views/Update'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/products' element = {<Main />} />
        <Route path = '/products/:id' element = {<ProductDetail />} />
        <Route path = '/:id/edit' element = {<Update />} />
      </Routes>
    </div>
  );
}

export default App;
