import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditDemande_Conge = () => {
    const [motif_demande_conge, setmotif_demande_conge] = useState("");
    const [validation_demande_conge, setvalidation_demande_conge] = useState("");
    const [date_heure_debut_demande_conge, setdate_heure_debut_demande_conge] = useState("");
    const [date_heure_fin_demande_conge, setdate_heure_fin_demande_conge] = useState("");
    const [date_heure_debut_conge_obtenu, setdate_heure_debut_conge_obtenu] = useState("");
    const [date_heure_fin_conge_obtenu, setdate_heure_fin_conge_obtenu] = useState("");
    const navigate = useNavigate();

  useEffect(() => {
    const getPointagesById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/Demande_Conge/${id}`
        );
        setName(response.data.date_pointage);
        setdate(response.data.date_heure_debut_demande_conge);
        setdate(response.data.date_heure_fin_demande_conge);
        setdate(response.data.date_heure_debut_conge_obtenu);
        setdate(response.data.date_heure_fin_conge_obtenu);

      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updateDemande_Conge = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/updateDemande_Conge/${id}`, {
        name: name,
        date_demande_conge: date_demande_conge 
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
      <h2 className="subtitle">Edit Demande_Conge</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateDemande_Conge}>
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
                <label className="label">Date</label>
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
                    Update
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

export default FormEditDemande_Conge;
