import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditPointages = () => {
  const [date_pointage, setdate_pointage] = useState("");
  const [heure_entre_pointage, setheure_entre_pointage] = useState("");
  const [heure_sortie_pointage, setheure_sortie_pointage] = useState("");
  const { id_pointage } = useParams();

  useEffect(() => {
    const getPointagesById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/pointages/${id}`
        );
        setName(response.data.date_pointage);
        setdate(response.data.heure_entre_pointage);
        setdate(response.data.heure_sortie_pointage);

      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getProductById();
  }, [id]);

  const updatePointages = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
        name: name,
        date_pointage: date_pointage,
      });
      navigate("/pointages");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Pointages</h1>
      <h2 className="subtitle">Edit Pointages</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updatePointages}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Product Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Price</label>
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

export default FormEditPointages;
