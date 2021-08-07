import { functionTypeParam } from "@babel/types";
import React, {createContext, useEffect, useState} from "react"
import { getFirestore } from "../../firebase";


export const CartContext = createContext();

function CartProvider( {children}){
    //Se guardara cada vez que se agregue algo nuevo//

    const [ cart, setCart ] = useState([])
    const [ quantity, setQuantity] = useState(0)
    const [ total, setTotal] = useState()

function cambiarEstado(algo){
    setLisProducts(algo)
}

function cambiarStock(tittle){
    const nuevoList = listProducts.map(product=> {
        if (product.tittle === tittle) {
            product.available_quantity--
        }
        return product;
    })

    //al modificar el carro se actualiza el total//
 //   useEffect(() =>{
   //     var t=0
    //   const totals = cart.map(p =>p.price * p.amount)
    // totals.map( p => t = t + p)
    //    setTotal(t)
    //   const cartQuantity = cart.length
    //    setQuantity(cartQuantity)
    //}, [cart]
    //)
//}

useEffect(() => {
    async function getDataFromFireston(){
    const DB = getFirestore();
    const COLLETION = DB.collection('productos');
    const response = await COLLETION.get();
    setLisProducts(response.docs.map(element =>element.data()))
}
    getDataFromFireston();

    async function getDataFromFirestoreFromDocument() {
    const DB = getFirestore();
    const Document = DB.collection('productos').doc(id);
    const response = await Document.get();
    response.data();    
    }

    getDataFromFirestoreFromDocument()
}, [])

//funcion para ver si el producto esta en el carro//
function isInCart(id){
    const item = cart.find(p => p.id == id)
    if (item === undefined){
        return false 
    }
    else {
        return true
    }

    function addToCart(product, counter, id){
        if(isInCart(id)){
            const oldProduct = cart.find(p=>p.id ===id)
            const newQuantity = oldProduct.amount + counter
            const newProduct = {id: oldProduct.id, name: oldProduct.name, image: oldProduct.image, price:oldProduct.price, amount:counter}
            const cartWithoutOld =cart.filter(product =>product.id = ! id)
            const cartWithNew = [...cartWithoutOld, newProduct]
            setCart(cartWithNew)

        }else {
            const newItem = {id: product.id, name:product.name, image: product.image,price:product.price, amount:counter}
            setCart([...cart, newItem])
        }
    }
}
    function eliminatefromCart(id){
        const newCart = cart.filter(product => product.id !==id)
        setCart(newCart)
    }

    function clearCart(){
        setCart([])
        setQuantity(0)
    }

    return(
        <CartContext.Provider value ={{cart, quantity, total, addToCart,eliminatefromCart, clearCart}}>
            { children}
        </CartContext.Provider>
    ) }
}