import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditEmployes = () => {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [password, setPassword] = useState("");
  const [Date_Naiss, setDate_Naiss] = useState("");
  const [Email, setEmail] = useState("");
  const [Sexe, setSexe] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [Tel, setTel] = useState("");
  const [Photo, setPhoto] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setFonction(response.data.fonction);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getEmployesById();
  }, [id]);

  const updateEmployes = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/employes/${id}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Employes</h1>
      <h2 className="subtitle">Update Employes</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateEmployes}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Fonction</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={role}
                      onChange={(e) => setFonction(e.target.value)}
                    >
                      <option value="admin">Admin</option>
                      <option value="user">Employes</option>
                    </select>
                  </div>
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

export default FormEditEmployes;
