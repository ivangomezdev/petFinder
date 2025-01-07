import React, { useEffect, useState } from "react";
import "./petCard.css";
import Popup from "./PopUp";
import { useRecoilValue } from "recoil";
import { allPetsData } from "../atom/Atom";
import useData from "../hooks/UseMyPets";
import EmptyPetsPage from "../pages/EmptyPetsPage";
import { formData } from "../data/formData";

const PetCard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const fetchPetsData = useRecoilValue<any[]>(allPetsData);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const petsHTMLMap = fetchPetsData.map((i) => {
    return (
      <div
        style={{ backgroundImage: `url(${i.src})` }}
        className={"petcard__primaryC"}
      >
        <div className={"petcard__secondaryC"}>
          <div className={"petcard__text"}>
            <h2>{i.name}</h2>
          </div>
          <button className={"petCard__button"} onClick={handleOpenPopup}>
            ℹ
          </button>
        </div>
      </div>
    );
  });

  return (
    <>
      {fetchPetsData.length <= 0 ? (
        <EmptyPetsPage />
      ) : (
        <div className={"petCard__content"}>
          {petsHTMLMap}
          {isPopupOpen && (
            <Popup
              type="Form"
              formData={formData}
              buttonText="Dar Aviso"
              onClose={handleClosePopup}
            />
          )}
        </div>
      )}
    </>
  );
};

export default PetCard;
