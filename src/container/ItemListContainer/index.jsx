import React from 'react';
import {useEffect, useState} from "react";
import './style.scss';
import ItemCountComponent from "../../components/ItemCount";
import item from "../../components/item";
import itemList from "../../components/itemList";


  
function products(){

  const [ items, setItems] = useState ([])
  const [ fireItems, setFireItems] = useState ([])

  useEffect (() => {
    const promesa = new Promise ((resolve, reject)=>{
    setTimeOut (function(){
      resolve(productos);
    }, 2000);

    }
    )

    promesa.then( result => setItems(result))
    promesa.catch( err = console.log("salio mal"))
  }, []);

  return( 
    <div>
      <h2>{greeting} </h2>
      { items ? <itemList items={items}/> : <h2>Loading </h2>}

    </div>
  )



const baseDeDatos = [
  {
      id: 1,
      nombre: 'Ref: bolso amarillo' ,
      precio: 75000,
      imagen: 'imagenes/bolsoamarillo.jpg'
  },
  {
      id: 2,
      nombre: 'Ref: Vica Kids',
      precio: 50000,
      imagen: 'imagenes/vicakids.jpg'
  },
  {
      id: 3,
      nombre: 'Ref: Bolso Hombre',
      precio: 65000,
      imagen: 'imagenes/hombre.jpg'
  },
  {
      id: 4,
      nombre: 'Ref: Morral Vica',
      precio: 120000,
      imagen: 'imagenes/morralmorado.jpg'
  },

  {
    id: 5,
    nombre: 'Ref: Camel cruzado',
    precio: 65000,
    imagen: 'imagenes/camelcruzado.jpg'
},

{
    id: 6,
    nombre: 'Ref: Morral rayas',
    precio: 65000,
    imagen: 'imagenes/morralrayas.jpg'
},

{
    id: 7,
    nombre: 'Ref: leopardo',
    precio: 70000,
    imagen: 'imagenes/leopardo.jpg'
},

{
    id: 8,
    nombre: 'Ref: Tula',
    precio: 20000,
    imagen: 'imagenes/tela.jpg'

}


];

}


function ItemListContainer({Saludo}){

    return(
        <>
            <h1>{Saludo}</h1>
            <ItemCountComponent stock={10} initial={1}/>
        </>
        
    );
}


export default ItemListContainer;




export default productos;
