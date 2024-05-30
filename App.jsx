import { useState } from 'react'
 import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Weather from './components/Weather';
import Crud from './components/Crud';
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
  // import getWeather from './api/api';
function App() {
    // const [city, setCity] = useState("");
    // const [weather, setWeather] = useState({});
    // const getWeatherbycity =  async () => {
    //     const weatherData = await getWeather(city);
    //     setWeather(weatherData);
    //     setCity("");
    // }
    const router = createBrowserRouter([
      {
        
        path: "/",
        element:    <Weather/>  
      },
      {  
        path: "/todo",
        element:  <>  <Navbar/>   <Crud/>    </>
      },
    ])
    // const router = createBrowserRouter([
      
    //   { 
    //     path: "/todo",
    //     element:  <>  <Navbar/>   <Crud/>    </>
    //   }
    // ])
  return (
    <>
     <RouterProvider router={router}/>
    
       
    </>
  )
}

export default App
