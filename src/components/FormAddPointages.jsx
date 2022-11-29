import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddPointages = () => {
  const [date_pointage, setdate_pointage] = useState("");
  const [heure_entre_pointage, setheure_entre_pointage] = useState("");
  const [heure_sortie_pointage, setheure_sortie_pointage] = useState("");
  const navigate = useNavigate();

  const savePointages = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/products", {
        name: name,
      });
      navigate("/poitages");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Poitages</h1>
      <h2 className="subtitle">Add New Poitages</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={savePoitages}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Poitages Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">name</label>
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

export default FormAddPoitages;
