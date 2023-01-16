import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="about" element={<About />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
