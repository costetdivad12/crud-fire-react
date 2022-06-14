import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConf";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useCollection } from "react-firebase-hooks/firestore";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Show = () => {
  const [Products, setProducts] = useState([]);

  //   const [value, loading, error] = useCollection(
  //   collection(db, "products"),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );

  // setInterval(()=>{
  //   value && setProducts( value.docs.map((data) => ({ ...data.data(), id: data.id })));
  // },500)

  // console.log(Products)
  // const collectionProduct = collection(db, "products");

  const getProducts = async () => {};

  const deleteProducts = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    // getProducts();
  };

  const confirDelete = (id) => {
    Swal.fire({
      title: "Eliminar Producto?",
      text: "Deseas eliminar el producto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProducts(id);
        Swal.fire("Eliminado!", "El producto se ha eliminado !!", "success");
      }
    });
  };

  useEffect(() => {
    onSnapshot(collection(db, "products"), (querySnap) => {
      const Prod = [];
      querySnap.forEach((doc) => {
        Prod.push({ ...doc.data(), id: doc.id });
      });

      setProducts(Prod);
    });
  }, []);

  console.log(Products);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <Link to="/create" className="btn btn-secondary mt-2 mb-2">
                Crear
              </Link>
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
                {Products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.nombre}</td>
                    <td>{product.stock}</td>
                    <td>
                      <Link
                        to={`/editar/${product.id}`}
                        className="btn btn-warning mt-2 mb-2"
                      >
                        <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
                      </Link>
                      <button
                        onClick={() => {
                          confirDelete(product.id);
                        }}
                        className="btn btn-success"
                      >
                        <FontAwesomeIcon icon="fa-regular fa-trash-can" />
                      </button>
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
