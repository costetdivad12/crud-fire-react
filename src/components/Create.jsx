import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConf";
import { async } from "@firebase/util";

const Create = () => {
  const [Nombre, setNombre] = useState("");
  const [Stock, setStock] = useState(0);

  const navigate = useNavigate();
  const collectionProduct = collection(db, "products");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(collectionProduct, { nombre: Nombre, stock: Stock });
    navigate("/");
  };

  const nombres = (e) => {
    setNombre(e.target.value);
  };

  const stocks = (e) => {
    setStock(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Create Product</h1>
            <form onSubmit={store}>
              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input
                  type="text"
                  value={Nombre}
                  className="form-control"
                  onChange={nombres}
                  placeholder="Nombre"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Stock</label>
                <input
                  type="number"
                  value={Stock}
                  className="form-control"
                  onChange={stocks}
                  placeholder="cantidad"
                />
              </div>

              <button type="sumit" className="btn btn-danger">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
