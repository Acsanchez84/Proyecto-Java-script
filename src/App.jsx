import "../node_modules/bootstrap/dist/css/bootstrap.css";
import  NavBar from './components/NavbarComponent';
import './App.css';
import { footer } from './components/footerComponent';
import{Navbarcomponent} from '/.components/NavbarComponent';
import ItemListContainer from './components/ItemListContainer';
import ItemComponent from "./components/ItemComponent";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CartProvider from './context/CartContext';
import { useEffect } from "react";
import { getFirestore } from "./firebase";


useEffect(()=> {
  const db = firestore
  const collection = db.collection('productos')
  const query = collection.get()
  query
  .then((result) => { 
    serFireItemss(result).docs.map(p => ({id: p.id, ...p.data()}))
  
})
.catch((error) => {
  console.log(error)

}) 
 
 }, [fireItems])

function App() {
  return (
    <>
    <CartProvider>
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
      
      </CartProvider>
    </>

  );
}

export default App; 