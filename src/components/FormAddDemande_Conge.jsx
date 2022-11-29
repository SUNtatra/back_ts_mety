import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddDemande_Conge = () => {
  const [motif_demande_conge, setmotif_demande_conge] = useState("");
  const [validation_demande_conge, setvalidation_demande_conge] = useState("");
  const [date_heure_debut_demande_conge, setdate_heure_debut_demande_conge] = useState("");
  const [date_heure_fin_demande_conge, setdate_heure_fin_demande_conge] = useState("");
  const [date_heure_debut_conge_obtenu, setdate_heure_debut_conge_obtenu] = useState("");
  const [date_heure_fin_conge_obtenu, setdate_heure_fin_conge_obtenu] = useState("");
  const navigate = useNavigate();

  const saveDemande_Conge = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/Demande_Conge", {
        name: name,
      });
      navigate("/Demande_Conge");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Demande_Conge</h1>
      <h2 className="subtitle">Add New Demande_Conge</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveDemande_Conge}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Date</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Demande_Conge Date"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">date</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddDemande_Conge;
