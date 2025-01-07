import React from "react";
import cleanImage from "../assets/cleanPage.png"
import Button from "../ui/Button";
import { Link } from "react-router";
import "./emptyPetsPage.css"

const EmptyPetsPage = () => {
  return (
    <div className={"emptyPetsPage__cont"}>
      <h2>Mascotas Reportadas</h2>
      <p>Aún no reportaste mascotas</p>
      <img src={cleanImage} alt="" />
      <Link to={"/reports"}><Button text="Publicar reporte" /></Link>
    </div>
  );
};

export default EmptyPetsPage;
