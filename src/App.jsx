import React from 'react'
import CardComponent from './components/CardComponent';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { NavbarComponent } from './components/CardComponent';
import  NavBar from './components/NavbarComponent';
import { HomeContainer} from '/.components/container/HomeContainer';
import { ItemListContainer} from './container/ItemListContainer';
import './App.css';
import { footer } from './components/footerComponent';
import{Navbarcomponent} from '/.components/NavbarComponent/NavBar';



function App() {
  return (

    <>
    <NavBar/>
    <Navbarcomponent/>
    <ItemListContainer/>

 
    </>
  );
      
  }

export default App;




