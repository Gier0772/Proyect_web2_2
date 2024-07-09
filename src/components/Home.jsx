/*import React from "react";
import appFirebase from "../credenciales";
import {getAuth, signOut} from "firebase/auth"
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
    return (
        <div>
            <h2 className="text-center">Bienvenido {correoUsuario} 
                <button className="btn btn-primary" onClick={() => signOut(auth)}>Logout</button>
            </h2>
        </div>
    )
}

export default Home;*/
import React from "react";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import logo from "../assets/logo_sin_fondo.png";
import ProductTable from "./ProductTable";
import './Home.css'; // Agrega un archivo CSS para estilizar el Dashboard

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
    const products = [
        { id: 1, image: "https://via.placeholder.com/50", name: "Producto 1", price: 10, stock: 5 },
        { id: 2, image: "https://via.placeholder.com/50", name: "Producto 2", price: 20, stock: 3 },
        // Productos de ejemplo
    ];

    const handleEdit = (product) => {
        // Lógica para editar producto
        console.log("Editar producto", product);
    };

    const handleDelete = (productId) => {
        // Lógica para borrar producto
        console.log("Borrar producto", productId);
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <img src={logo} alt="Logo" className="logo" />
                <h1 className="dashboard-title">Dashboard-Upalmarket</h1>
                <div className="user-info">
                    {correoUsuario}
                    <button className="btn btn-primary" onClick={() => signOut(auth)}>Logout</button>
                </div>
            </div>
            <div className="dashboard-buttons">
                <button className="btn btn-secondary">Ir a Chat</button>
                <button className="btn btn-secondary">Cambiar Tabla</button>
            </div>
            <div className="dashboard-table">
                <ProductTable 
                    products={products} 
                    onEdit={handleEdit} 
                    onDelete={handleDelete} 
                />
            </div>
        </div>
    );
};

export default Home;

