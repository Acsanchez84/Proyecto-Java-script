import React from 'react';
import item from '.item.jsx';

function itemList({items }) {
    return( 
        <div className="itemList">

        { items.map(item=> <Item key={item.id} id={item.id}
        tittle={item.tittle} image={item.thumbnai1} />)
    }
            
        </div>
    )
}

export default itemList;