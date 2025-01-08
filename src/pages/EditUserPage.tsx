
import Form from "../components/Form";
import "./editUserPage.css"
import UseFetchWToken from "../hooks/UseFetchWToken";
import { userData } from "../data/userData";

const EditUserPage = () => {
const useEdit = UseFetchWToken()


  
  return (
    <div className={"editUser__cont"}>
 <h2 className={"authPage__title"}>Datos personales </h2>
      <Form  submit={useEdit} formFields={userData} buttonText="Guardar" />
    </div>
  );
};

export default EditUserPage;
