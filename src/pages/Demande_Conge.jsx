import React, { useEffect } from "react";
import Layout from "./Layout";
import Demande_CongeList from "../components/Demande_CongeList";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Demande_Conge = () => {
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
      <Demande_CongeList />
    </Layout>
  );
};

export default Demande_Conge;
