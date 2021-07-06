import iconoCarrito from "./imagenes/carrito.jpg";
import './style.scss';

function CartWidged() {
    return(
        <div>
            <img src={iconoCarrito} alt="carrito de compras"/>
        </div>
    );
}

export default CartWidged;