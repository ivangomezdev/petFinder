import React from "react";
import Form from "../components/Form";
import "./editUserPage.css";
import { userDataLogin } from "../data/authData";

const UserPasswordPage = () => {
  return (
    <div className={"editUser__cont"}>
      <h2 className={"authPage__title"}>Datos personales </h2>
      <Form formFields={userDataLogin} buttonText="Guardar" />
    </div>
  );
};

export default UserPasswordPage;
