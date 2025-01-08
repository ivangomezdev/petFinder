import React, {  useState } from "react";
import Label from "../ui/Label";
import { MyMap } from "./Map";


type EditFormProps = {
  filteredData: any[];
  submitEdit: (e: React.FormEvent) => void; // Acepta funciones con un argumento tipo React.FormEvent
};

const EditForm = ({ filteredData, submitEdit }: EditFormProps) => {
  const [activeInput, setActiveInput] = useState<boolean>(true);

  const handleActiveInput = () => {
    setActiveInput(!activeInput);
  };

  return (
    <>
      {filteredData?.map((i) => (
        <form
          onSubmit={() => submitEdit(i.id)} // Pasamos el evento y el id
          className="popup__contentEdit"
          key={i.id}
        >
          <img className="popup__contentEditimg" src={i.src} alt={i.name} />
          <Label text="Nombre" htmlFor="name" />
          <input name="name" defaultValue={i.name} disabled={activeInput} />
          <div className="popup__geoCont">
            <Label text="Localización" htmlFor="lat" />
            <MyMap />
            <input name="lat" defaultValue={i.lat} disabled={activeInput} />
            <input name="lng" defaultValue={i.lng} disabled={activeInput} />
          </div>
          <Label text="Creado" htmlFor="createdAt" />
          <input name="createdAt" defaultValue={i.createdAt} disabled={true} />
          {!activeInput && (
            <button className="popup__hinputOk" type="submit">
              ✅
            </button>
          )}
        </form>
      ))}
      <button className="popup__hinput" onClick={handleActiveInput}>
        ✍
      </button>
    </>
  );
};

export default EditForm;
