import React, { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import "./petsPage.css";
import EmptyPetsPage from "./EmptyPetsPage";
import useData from "../hooks/UseMyPets";

const PetsPage = () => {
  const { petsFetch } = useData() || [];

  return (
    <div className={"petsPage__cont"}>
      <h2 className={"petsPage__title"}>Mascotas cercanas </h2>
      <PetCard />
    </div>
  );
};

export default PetsPage;
