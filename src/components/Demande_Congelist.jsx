import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Demande_CongeList = () => {
  const [Demande_Conge, setDemande_Conge] = useState([]);

  useEffect(() => {
    getDemande_Conge();
  }, []);

  const getDemande_Conge = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setDemande_Conge(response.data);
  };

  const deleteDemande_Conge = async (Demande_CongeId) => {
    await axios.delete(`http://localhost:5000/Demande_Conge/${Demande_CongeId}`);
    getDemande_Conge();
  };

  return (
    <div>
      <h1 className="title">Demande_Conge</h1>
      <h2 className="subtitle">List of Demande_Conge</h2>
      <Link to="/Demande_Conge/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>id_Demande_Conge</th>
            <th>motif</th>
            <th>validation</th>
            <th>date_heure_debut_demande_conge</th>
            <th>date_heure_fin_demande_conge</th>
            <th>date_heure_debut_conge_obtenu</th>
            <th>date_heure_fin_conge_obtenu</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{Demande_Conge.motif}</td>
              <td>{Demande_Conge.validation}</td>
              <td>{Demande_Conge.Employes.date_heure_debut_demande_conge}</td>
              <td>{Demande_Conge.Employes.date_heure_fin_demande_conge}</td>
              <td>{Demande_Conge.Employes.date_heure_debut_conge_obtenu}</td>
              <td>{Demande_Conge.Employes.date_heure_fin_conge_obtenu}</td>
              <td>
                <Link
                  to={`/Demande_Conge/edit/${Demande_Conge.uuid}`}
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

export default Demande_CongeList;
