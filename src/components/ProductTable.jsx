import React from "react";

const ProductTable = ({ products, onEdit, onDelete }) => {
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID Producto</th>
                        <th>Imagen Producto</th>
                        <th>Nombre Producto</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td><img src={product.image} alt={product.name} className="product-image" /></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => onEdit(product)}>Editar</button>
                                <button className="btn btn-danger" onClick={() => onDelete(product.id)}>Borrar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;
