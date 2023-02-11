import React from 'react';
import ReactDOM from 'react-dom/client';
import {
   BrowserRouter,Route,
    Routes,
  } from "react-router-dom";
// import './index.css';
import App from './App';
import About from './components/About';
import Navbar from './components/Navbar';



const root =  ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes> 

<Route element = {<Navbar/>} > 
<Route path="/" element= {<App/>} />
<Route path="/about" element= {<About/>} />




</Route>


 </Routes>



</BrowserRouter>
 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
