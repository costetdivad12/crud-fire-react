import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConf";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Create from "./Create";

const Show = () => {
  const [Products, setProducts] = useState([]);

  const collectionProduct = collection(db, "products");

  const getProducts = async () => {
    const resp = await getDocs(collectionProduct);

    setProducts(resp.docs.map((data) => ({ ...data.data(), id: data.id })));

    const deleteProducts = async (id) => {
      const productDoc = doc(db, "products", id);
      await deleteDoc(productDoc);
      getProducts();
    };
  };
//   console.log(Products);
  useEffect(() => {
    getProducts();

  
  }, [Products]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              {/* <Link to="/create" className="btn btn-secondary mt-2 mb-2">
                Crear
              </Link> */}
            </div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Descripción</th>
                        <th>Stock</th>
                        <th>Accions</th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map((product)=>(
                     <tr key={product.id}>
                         <td>
                             {product.nombre}
                         </td>
                         <td>
                             {product.stock}
                         </td>
                         <td>
                             <button className="btn btn-success">Agregar</button>
                         </td>
                     </tr>
                     
                    ))}
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
