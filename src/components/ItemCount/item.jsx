import { identifier } from '@babel/types';
import React from 'react'; 


function item( { id, tittle, image}) {
    return (
        <div>
            {tittle}
            <img src= {image} alt= {tittle}/>
        </div>
    )
}
export default item