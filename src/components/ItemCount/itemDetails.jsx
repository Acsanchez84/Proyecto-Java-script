import { react, useState,useEffect } from "react";
import itemDetails from ".itemDetails"

function ItemDetails (){

    const[itemDetails,setItemDetails] = useState([]);

    useEffect(()=>{

        async function detallesFetch(){

            const data = await fetch("https://api.mercadolibre.com/sites/MLC/search?q=bolsos");
            const items = await data.json();

            setItemDetails(items.results[0]);

        }

        detallesFetch();

    },[])

    return(

        <ItemDetails itemDetailsProp = {itemDetails}/>

    )

}

export default ItemDetails;