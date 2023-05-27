import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DetailedPage from './pages/DetailedPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [visible, setVisible] = useState(false);
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar
          sidebar={sidebar}
          setSidebar={setSidebar}
          visible={visible}
          setVisible={setVisible}
        />
        <div className='content'>
          <div className='contentBody'>
            <Routes>
              <Route path='/' element={<HomePage sidebar={sidebar} setSidebar={setSidebar} />} />
              <Route path='/detail/:id' element={<DetailedPage visible={visible} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>

      {/* <HomePage/> */}
    </div>
  );
}

export default App;
