import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { NavLink, useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from "firebase/firestore"
import { firestoreDb } from '../../services/firebase/firebase';

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(
          collection(firestoreDb, "products"),
          where("category", "==", categoryId)
        )
      : collection(firestoreDb, "products");

    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });

        setProducts(products);
      })
      .catch((error) => {
        console.log("error", `Products not found: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProducts();
    };
  }, [categoryId]);

  useEffect(() => {
    getDocs(collection(firestoreDb, "category")).then((response) => {
      const categories = response.docs.map((cat) => {
        return { id: cat.id, ...cat.data() };
      });
      setCategories(categories);
    });
  }, []);


    

  return <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="itemListContainer">
          <div className="category">
            {categories.map((category) => (
              <NavLink
                key={category.id}
                to={`/products/${category.description}`}
                className="nav-link"
              >
                {category.description}
              </NavLink>
            ))}
          </div>

          <ItemList products={products} />
        </div>
      )}
    </>
 
};


export default ItemListContainer