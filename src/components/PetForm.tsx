import React, { FormEvent, useState } from "react";
import Label from "../ui/Label";
import Input from "../ui/Input";
import Button from "../ui/Button";
import "./petForm.css";
import { MyMap } from "./Map";
import UsePetForm from "../hooks/usePetForm";



interface FormData {
    buttonText: string;
    submit: (e:FormEvent) => void;
    buttonText2: string;
    handlerClickBTN1?: EventListener;
    handlerClickBTN2?: EventListener;
}



const PetForm = (data: FormData) => {
const {selectedImage,parseMarkerToStr,onImageChange} = UsePetForm()

  return (
    <form className={"petForm__cont"} onSubmit={data.submit}>
      <Label htmlFor="petName" text="Nombre" />
      <Input
        isRequired={true}
        placeholder="Ingresá su nombre..."
        name="petName"
        type="text"
      />

      {selectedImage == null ? (
        <>
          <label
            className={"petForm__labelFileBtn"}
            htmlFor="petForm__inputFile"
          >
            Subir Imágen
          </label>
          <input
            required={true}
            id="petForm__inputFile"
            className={"petForm__inputFile"}
            placeholder={"imagen"}
            type="file"
           
            onChange={onImageChange}
          />
        </>
      ) : (
        <div style={{ marginTop: "20px" }}>
          <img
            src={selectedImage}
            alt="Preview"
            id={"petImage"}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        
        </div>
      )}
      <p>
        Buscá un punto de referencia para reportarla. la
        ubicación donde lo viste por última vez o tu ubicación en caso de dar hogar transitorio.
      </p>
      <MyMap />
      <Label htmlFor="locate" text="Ubicación" />
      <Input
        isDisabled={true}
        name="location"
        type="text"
        placeholder={parseMarkerToStr}
      />
      <Button clickHandler={data.handlerClickBTN1} text={data.buttonText} />
      <Button clickHandler={data.handlerClickBTN2} text={data.buttonText2} />
    </form>
  );
};

export default PetForm;
