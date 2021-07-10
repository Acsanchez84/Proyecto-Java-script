import React from "react";
import {useState, useEffect} from "react";
import ItemComponent from "../Item";

function ItemListComponent(){
    const [products, setProducts] = useState ([]);

    useEffect(()=>{
        async function productsFetch(){
            const data = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=bolsos");
            const items = await data.json();
            setProducts(items.results);
        }

        productsFetch();

    },[])

    return(
        <>
            {products.map(item =>{return <ItemComponent key={item.id} itemInfo={item}/>})}
        </>
    );
}

export default ItemListComponent;