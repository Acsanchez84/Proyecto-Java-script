import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';



function Cart(props) {
    const context = useContext(CartContext);

    const onAdd = (e, item, quantity) => {
        context.addItem(e, item, quantity)
    };

    const onSubstract = (e, item, quantity) => {
        context.substractItem(e, item, quantity)
    };

    return (
        <div >
            <div className="breadcrumb">
                <Link to="/" className="back-link">
                    <img src={backIcon} className="back-link__icon" alt="" />
                    <span className="back-link__text">Volver al inicio </span>
                </Link>
            </div>
            <div className="appear" hidden={context.cart.length !== 0}>
                <EmptyCartSvg />
                <h3>Tu carrito está vacío</h3>
            </div>
            <div className="cart appear" hidden={context.cart.length === 0}>
                <div className="cart-header"><span className="cart__title">Listado de productos</span> <button onClick={() => { context.clear() }} className="cart__clear">Borrar todos los productos</button> </div>
                <ul>
                    {
                        context.cart.map(
                            (obj, pos) => {
                                return (
                                    <li key={obj.item.id} className="cart-item">
                                        <img src={obj.item.pictureUrl} alt={obj.item.title} className="cart-item__img" />
                                        <div className="cart-item__description">
                                            <h3 className="cart-item__title">{obj.item.title}</h3>
                                            <div className="cart-item__actions">
                                                <span>Cantidad:</span> <ItemCount min="0" max={obj.item.stock} value={obj.quantity} onAdd={(e) => { onAdd(e, obj.item, 1) }} onSubstract={(e) => { onSubstract(e, obj.item, 1) }} className="cart-input-number" />
                                                <span className="pri">Pr: ${obj.item.price} </span>
                                                <span>Subtotal: ${obj.item.price * obj.quantity} </span>
                                                <button onClick={() => { context.removeItem(pos) }} className="cart-item__remove">
                                                    <img src={deleteIcon} className="delete-icon" alt="" />
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                );
                            }
                        )
                    }
                    <div className="cart__total"><span>Total:</span> <span>${context.totalPrice}</span> </div>
                </ul>
                <Link to="/checkout" className={`btn--big ${context.cart.length === 0 ? 'disabled' : ''}`}  >COMPRAR CARRITO</Link>
            </div>
        </div>

    );
}

export default Cart;