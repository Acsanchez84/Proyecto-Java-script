import React, { useEffect, useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import  NavBar from './components/NavbarComponent';
import './App.css';
import { footer } from './components/footerComponent';
import{Navbarcomponent} from '/.components/NavbarComponent/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CardComponent from './CardComponent';

function App() {
  return (

    <>
    <NavBar/>
    <productos/>
    <Navbarcomponent/>
    <CardComponent/>
    <ItemListContainer Saludo={"Bienvenidos a VICA"}/>
    <footer/>

 
    </>
  );
      
  }

export default App; 