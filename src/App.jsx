import "../node_modules/bootstrap/dist/css/bootstrap.css";
import  NavBar from './components/NavbarComponent';
import './App.css';
import { footer } from './components/footerComponent';
import{Navbarcomponent} from '/.components/NavbarComponent';
import ItemListContainer from './components/ItemListContainer';
import CardComponent from './CardComponent';
import {BrowserRouter, Switch, Router} from 'react-router-dom';
import ItemComponent from "./components/ItemComponent";
import {BrowserRouter, Switch, Route} from 'react-router-dom'


 
function App() {
  return (
    <>
      <BrowserRouter>

        <NavbarComponent/>

        <Switch>

          <Route exact path={'/'}>
            <ItemListContainer />
          </Route>

          <Route path={'/category/:id'}>
            <ItemListContainer />
          </Route>

          <Route path={'/item/:id'} >
            <ItemDetailContainer />
          </Route>

          <Route path={"*"} component={()=> <h1> 404 </h1>} />
          
          
        </Switch>
   
        <footer/>
      </BrowserRouter>
    </>

  );
}

export default App; 