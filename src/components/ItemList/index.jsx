import { identifier } from '@babel/types';
import React from 'react'; 
import { ItemCountComponent } from '.components/itemList';
import {ItemComponent} from './Item.jsx'


export const ItemListComponent = ({productos}) => {
    return (
        <div className ="presentarCards">
            {productos.map(element => {
                    return(
                        <ItemComponent key={element.id} id={element.id} name={element.title} precio={element.price} img={element.thumbnail} stock={element.available_quantity}/>
                    )
                })}
        </div>
    )
}