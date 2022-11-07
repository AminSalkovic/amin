import React,{useState} from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';




function App() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  return (
    <>
       <div>
             {email==='amin' && password==='saki' ? <Home/> : <Login email={setEmail} password={setPassword}/>}
              <Routes>
                 <Route path={'/'} element={<Home/>} />
          
              </Routes>
             
       </div> 
    </>
   
   
  );
}

export default App;