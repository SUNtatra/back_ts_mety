import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [pointages, setpointages] = useState([]);

  useEffect(() => {
    getPointages();
  }, []);

  const getPointages = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setPointages(response.data);
  };

  const deletePointage = async (pointageId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getPointages();
  };

  return (
    <div>
      <h1 className="title">Pointages</h1>
      <h2 className="subtitle">List of Pointages</h2>
      <Link to="/pointages/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>id_pointage</th>
            <th>date_pointage</th>
            <th>heur_entre</th>
            <th>heure_sortie</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{pointages.date_pointage}</td>
              <td>{pointages.heur_entre}</td>
              <td>{pointages.user.heure_sortie}</td>
              <td>
                <Link
                  to={`/pointages/edit/${pointages.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointagesList;
