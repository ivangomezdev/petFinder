import React, { useEffect, useState } from "react";
import "./card.css";
import useData from "../hooks/UseMyPets";
import Popup from "./PopUp";


interface CardProps {
  content?: {
    src: string;
    name: string;
    id: string;
  }[];
}

const Card = (content: CardProps) => {
  const { deletePet } = useData();

  // Asegura que myData sea un arreglo
  const myData = Array.isArray(content.content) ? content.content : [];
  const [localData, setLocalData] = useState(myData);
  const [popUpOpen, setpopUpOpen] = useState(false);
  const [dataFiltered, setDataFiltered] = useState<any>({});

  useEffect(() => {
    // Sincroniza el estado local con los datos provenientes de props
    setLocalData(myData);
  }, [myData]);

  const handleClose = () =>{
    setpopUpOpen(false)
  }

  const showPopUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetEl = e.target as HTMLButtonElement;
    const idToFilter = targetEl.id;
   
  const dataFiltered = localData.filter(i=>{
   
 
    return i.id == idToFilter;
    
    });

   
    
    setDataFiltered(dataFiltered)
    setpopUpOpen(true)
    
    
  };

  


  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const targetEl = e.target as HTMLButtonElement;
    const idToDelete = targetEl.id;

    // Elimina en la DB
    deletePet(idToDelete);

    // Actualiza el estado local eliminando el elemento correspondiente
    setLocalData((prev) => prev.filter((item) => item.id !== idToDelete));
  };

  const showingCards = localData.map((i) => {
    return (
      <div className={"card__content"} key={i.id}>
        <img src={i.src} alt={i.name} />
        <p className={"card__text"}>{i.name}</p>
        <button onClick={showPopUp} id={i.id} className={"card__button"}>
          ✍
        </button>
        <button onClick={handleDelete} id={i.id} className={"card__button"}>
          ❌
        </button>
        {popUpOpen && <Popup   filteredData={dataFiltered} onClose={handleClose} type="Edit" />}
      </div>
    );
  });

  return <>{localData.length > 0 ? showingCards : <p>"Sin data encontrada aún"</p>}</>;
};

export default Card;