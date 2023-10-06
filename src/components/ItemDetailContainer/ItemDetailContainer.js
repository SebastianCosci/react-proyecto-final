import './itemdetailcontainer.css';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebase.js';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, 'productos', itemId);
        const productSnapshot = await getDoc(productRef);

        if (productSnapshot.exists()) {
          const productData = productSnapshot.data();
          setProduct({ id: itemId, ...productData });
        } else {
          console.log('No se encontró el producto');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    if (itemId) {
      fetchProduct();
    }
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {product ? <ItemDetail {...product} /> : <p>Cargando producto...</p>}
    </div>
  );
};

export default ItemDetailContainer;
