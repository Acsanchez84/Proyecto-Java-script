import { useState } from "react";
import '.ItemCount.scss'


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

export default ItemCountComponent;
    