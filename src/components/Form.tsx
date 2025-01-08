import React from "react";
import Input from "../ui/Input";
import Label from "../ui/Label";
import "./form.css";
import Button from "../ui/Button";
import Line from "../ui/Line";
import SideButtons from "../ui/SideButtons";

type formData = {
  formFields: any[];
  buttonText: string;
  sideButtons?: any[];
  buttonHandler?: () => void
  submit?:(e:React.FormEvent<HTMLFormElement>) => void
};

const Form = ({ formFields, buttonText, sideButtons,buttonHandler,submit }: formData) => {
  
  
  const formData = formFields.map((i) => {
    return (
      <>
        <Label htmlFor={i.id} text={i.text} />
        <Input type={i.type} placeholder={i.placeholder} name={i.name} />
      </>
    );
  });


  

  return (
    <form onSubmit={submit} className="form__cont">
      {formData}
      <Line size="270" color="gray" />
      <Button clickHandler={buttonHandler} text={buttonText} />
      {sideButtons ? <SideButtons props={sideButtons} /> : <></>}
      
    </form>
  );
};

export default Form;
