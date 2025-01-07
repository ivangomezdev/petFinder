import React, { FormEvent, FormEventHandler } from "react";
import Form from "../components/Form";
import "./registePage.css";
import useAuth from "../hooks/UseFormController";
import { RegAuthData, sideButtonData } from "../data/authData";

const Register = () => {
  const { registerUser } = useAuth();


  return (
    <div className={"registerPage__cont"}>
 <h2 className={"authPage__title"}>Registro </h2>
      <Form
        formFields={RegAuthData}
        buttonText="Crear usuario"
        sideButtons={sideButtonData}
        submit={registerUser}
      />
    </div>
  );
};

export default Register;
