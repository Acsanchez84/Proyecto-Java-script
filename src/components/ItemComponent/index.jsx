import React from "react";
import './style.scss';
import {Link} from "react-router-dom"
import { ItemList } from "../ItemList";


function ItemComponent(itemInfo){

    return(

        <div className="card" id="cards">
            <span className="card-header" id="textHeader">{itemInfo.itemInfo.attributes[0].value_name}</span>
            <div className="card-body text-center" id="containerBody">
                <Link to={`/Detalles/${itemInfo.itemInfo.id}`}><img id="imagen" src={itemInfo.itemInfo.thumbnail} alt={itemInfo.itemInfo.id}/></Link>
                <h3 className="card-title">{itemInfo.itemInfo.title}</h3>
                <span className="card-text">${itemInfo.itemInfo.price}</span>
                <button className="btn btn-primary" id="buttonPosition">Agregar al carrito</button>
            </div>
            <div className="card-footer text-muted"><span>Stock: {itemInfo.itemInfo.available_quantity} un.</span></div>
        </div>
    )
}

export default ItemComponent;