
import './App.scss';
import Layout from './components/Layout';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from'react-router-dom';

function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
   </div>
  );
}

export default App;
