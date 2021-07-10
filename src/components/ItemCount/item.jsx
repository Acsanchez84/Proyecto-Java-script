import { identifier } from '@babel/types';
import React from 'react'; 


function item( { id, tittle, imagenes}) {
    return (
        <div>
            {tittle}
            <img src= {imagenes} alt= {tittle}/>
        </div>
    )
}
export default item