import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { getFirestore } from '../../firebase/index.jsx';
import {ItemDetailComponent} from '../components/itemDetail.jsx'


export const ItemDetailContainer= () => {
    const {id} = useParams();
    const [selectProduct, setSelectProduct] =useState([]);
    
    getProductML()


    useEffect(()=>{
      const db = getFirestore
      const collection = db.collection('productos')
      const query = collection.doc(id)

      query.get()
      .then((i)=>{
          setFireItem({id: i.id, ...i.data()})
      })
        }, [id])
    
      

    return (
        <div>
            <ItemDetailComponent producto={selectProduct} />
        </div>
    )
    }