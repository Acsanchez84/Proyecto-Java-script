import {Link} from 'react-router-dom'
import './Item.scss'


export const ItemComponent = ({id, name, precio, img, stock}) => {
    return(
        
        <div className ="card" >
            <h2> {name}  </h2>
            <img className="img" src={baul.jpg} alt='imagenDeProducto'/>
            
            <p> COP $ {precio}</p>
            <Link to={`/item/${id}`} style={{ textDecoration: 'none' }} className="verProducto"> Ver Producto </Link>
        </div> 
    )
}
