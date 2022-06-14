import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  collection,
  getDoc,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConf";
import { async } from "@firebase/util";

const Edit = () => {

  const [Nombre, setNombre] = useState("");
  const [Stock, setStock] = useState(0);
  const navigate = useNavigate();
  const {id} = useParams();

  const update = async (e)=>{
     e.preventDefault()
     const product=doc(db,'products',id)
     const data= {nombre:Nombre,stock:Stock}
     updateDoc(product,data)
     navigate('/')
  }
  const getProductById = async (id)=>{
   const product= await  getDoc(doc(db,'products',id))
   if (product.exists()) {
     console.log(product.data())
     setNombre(product.data().nombre)
     setStock(product.data().stock)
   }else{
    console.log('el producto no existe')
   }
  }
  const nombres = (e) => {
    setNombre(e.target.value);
  };

  const stocks = (e) => {
    setStock(e.target.value);
  };
 
  useEffect(()=>{

    getProductById(id);
    
  },[]);

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Edit Product</h1>
          <form onSubmit={update}>
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

            <button type="sumit" className="btn btn-danger">Editar</button>
          </form>
        </div>
      </div>
    </div>
  </>
  )
};

export default Edit;
