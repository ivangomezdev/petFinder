import "../ui/button.css";
import "./reportPage.css";
import PetForm from "../components/PetForm";
import UsePetForm from "../hooks/usePetForm";

const ReportPage = () => {
  const { createPet } = UsePetForm();

  return (
    <div className={"reportPage__cont"}>
      <h2 className={"authPage__title"}>Reportar mascota </h2>
      <h4 className={"reportPage__title"}>
        Ingresá la siguiente información para realizar el reporte de la mascota
      </h4>
      <PetForm
        buttonText="Reportar mascota"
        buttonText2="Cancelar"
        submit={createPet}
      />
    </div>
  );
};

export default ReportPage;
