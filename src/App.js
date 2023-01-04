
import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import DetailedPage from './pages/DetailedPage';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const[sidebar,setSidebar]= useState(true);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
      <div className='content'>
        <Sidebar
        sidebar={sidebar} 
        setSidebar={setSidebar}
        className="sidebar"
        />
       
       <div className='contentBody'>
       
       <Routes>
             <Route path='/' element={<HomePage sidebar={sidebar} />}/>
             <Route path='/detail/:id' element={<DetailedPage/>}/>
         </Routes>
       
         </div>
      </div>
      
     
      </BrowserRouter>
      
 {/* <HomePage/> */}
 
    </div>
  );
}

export default App;
