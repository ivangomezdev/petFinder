// Popup.tsx
import React, { FormEvent, useState } from "react";
import "./popUp.css";
import Form from "./Form";
import EditForm from "./EditForm";
import useData from "../hooks/UseMyPets";

type PopupProps = {
  formData?: any[];
  filteredData: any[];
  buttonText?: string;
  onClose: () => void;
  type: string;

};




const Popup = ({ formData, buttonText, onClose, type, filteredData }: PopupProps) => {
  const {editPets} = useData()

  const handleForm = async (e: FormEvent, id: string) => {
    e.preventDefault();
  
    const target = e.target as HTMLFormElement;
  
    const formData = {
      petName: target.name.value,
      lat: target.lat.value,
      lng: target.lng.value,
    };
  
    // Llama a editPets con el id y los datos del formulario
    await editPets(id, formData);
  };

  
  return (
    <div className="popup__overlay">
      <div className="popup__content">
        <button className="popup__close" onClick={onClose}>
          ❌
        </button>
        {type === "Form" && (
          <Form
            formFields={formData as []}
            buttonText={buttonText as string}
            buttonHandler={onClose}
          />
        )}
       {type === "Edit" && (
  <EditForm
    submitEdit={handleForm} // Pasamos la función handleForm
    filteredData={filteredData}
  />
)}
      </div>
    </div>
  );
};

export default Popup;
