import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Employeslist = () => {
  const [employes, setEmployes] = useState([]);

  useEffect(() => {
    getEmployes();
  }, []);

  const getEmployes = async () => {
    const response = await axios.get("http://localhost:5000/Employes");
    setEmployes(response.data);
  };

  const deleteEmployes = async (Matricule_E) => {
    await axios.delete(`http://localhost:5000/Employes/${matricule_E}`);
    getEmployes();
  };

  return (
    <div>
      <h1 className="title">Employes</h1>
      <h2 className="subtitle">List of Employes</h2>
      <Link to="/employes/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Matricule_E</th>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Date_Naiss</th>
            <th>Email</th>
            <th>Sexe</th>
            <th>Adresse</th>
            <th>Tel</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{Employes.Matricule_E}</td>
              <td>{Employes.Nom}</td>
              <td>{Employes.Prenom}</td>
              <td>{Employes.Date_Naiss}</td>
              <td>{Employes.Email}</td>
              <td>{Employes.Sexe}</td>
              <td>{Employes.Adresse}</td>
              <td>{Employes.Tel}</td>
              <td>{Employes.Photo}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteEmployes(user.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employeslist;
