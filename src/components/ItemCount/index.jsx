import { useContext, useState } from "react";
import '.ItemCount.scss'
import ItemComponent from "../ItemComponent";
import { Button } from "bootstrap";

//Aqui se encuentra la funcion de sumar y restar en el carrito//

export function ItemCountComponent ({ stock, initial }) {
    const [cantidad, setCantidad] = useState(0);

    useEffect (()=> {
        setCantidad(initial);
    }, [])
    
    function validarCantidadSuma (){
        if (cantidad < stock){
            setCantidad(cantidad+1) 
            console.log('¡Agregaste producto!')     
        }
    }

    function validarCantidadResta (){
        if (cantidad > initial){
            setCantidad(cantidad-1) 
            console.log('¡Eliminaste producto!')  
        }
    }

    return (
        <section id= 'contador'>
            <button onClick={() => {validarCantidadResta()}}>-</button>
            <p> {cantidad} </p>
            <button onClick={() => {validarCantidadSuma()}}>+</button>
        </section>
    )
}

//Funcion para terminar compra //

function ItemCount({ item,id,substract,counter,onAdd}){
    const [ open, setOpen ] = useState(false)
    const { addToCart}= useContext(CartContext)
}

function addAndOpen (ItemComponent, counter, id) {
    addToCart(item, counter,id);
    setOpen (true)
}
return(

<div className="itemCount">
    <div className="itemCount-counter">
        <Button variant="contained" onClick={substract}>-</Button>
        <h3>{counter}</h3>
        <Button variant="contained" onClick={add}>+</Button>
    </div>
    { !open ? (<div className="itemCount_agregar">
        <Button variant="contained" color="primary" onClick={ () => onAdd(item,counter,id)}>        
            <h3>Agregar al carrito<ShoppingCartIcon/></h3>
            </Button>
            </div>) :
            (<div className="itemCount_terminar" >
                <Link to="/cart">
                <Button variant="contained" color="primary">
                    <h3>Terminar la compra</h3>
                </Button>
                
    </Link>
    </div>)}
    
    </div>
    )


    

export default ItemCountComponent;
    