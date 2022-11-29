import React, { useEffect } from "react";
import Layout from "./Layout";
import FormEditDemnade_Conge from "../components/FormEditDemnade_Conge";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const EditDemnade_Conge = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <FormEditDemnade_Conge />
    </Layout>
  );
};

export default EditDemnade_Conge;
