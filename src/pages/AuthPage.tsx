
import Form from "../components/Form";
import "./authPage.css";
import useAuth from "../hooks/UseFormController";
import { formAuthData, sideButtonData } from "../data/authData";

const AuthPage = () => {
  const { loginUser } = useAuth();

  return (
    <div className={"authPage__cont"}>
      <h2 className={"authPage__title"}>Iniciar sesión </h2>
      <Form
        submit={loginUser}
        formFields={formAuthData}
        buttonText="ingresar"
        sideButtons={sideButtonData}
      />
    </div>
  );
};

export default AuthPage;
