import React from 'react';
import {Routes ,Route} from 'react-router-dom';
import './App.css';
import Header from './components/hero/Header'
import Navbar from './components/navbar/Navbar';



function App() {
  return (
    <>
       <div className="container">
        <React.Fragment>
        <Navbar/>
        <Routes>
         <Route path={'/'} element={<Header/>} />
                </Routes>
        </React.Fragment>
       </div> 
    </>
   
   
  );
}

export default App;