import { useEffect } from "react";
import useData from "../hooks/UseMyPets";
import Card from "../components/Card";
import "./myPetsPage.css";
const MyPetsPage = () => {
  const { pruebaData } = useData() || [];

  useEffect(() => {}, [pruebaData]);

  return (
    <div className={"myPetsPage__cont"}>
      <h2 className={"authPage__title"}>Mis reportes </h2>
      {pruebaData.length == 0 ? (
        <p style={{ color: "white" }}>CARGANDO DATA</p>
      ) : (
        <Card content={pruebaData} />
      )}
    </div>
  );
};

export default MyPetsPage;
