
import "./header.css";

import kittenLogo from "../assets/huellas.png";
import { useRecoilValue } from "recoil";
import { token, userData } from "../atom/Atom";
import NavLinks from "../ui/NavLinks";
import { Rotate } from "@cloudinary/url-gen/actions";

export const Header = () => {
  const fetchUser = useRecoilValue(token);

  //ingreso la data que va a tener mi componente LIST // put the data w use my comp LIST
  const listItems = [
    { name: "Home", to: "/" },
    { name: "Reportes", to: "/pets" },
    ...(fetchUser
      ? [{ name: "Reportar", to: "/reports" }]
      : [{ name: "Reportar", to: "/login" }]),
      ...(fetchUser && [{name:"Mis reportes",to:"/pets/my-pets"}]),
    ...(fetchUser
      ? [{ name: "👤", to: "/user" }]
      : [{ name: "👤", to: "/login" }]),
      
  ];


  return (
    <div className={"header__navBar"}>
      <img className={"header__img"} src={kittenLogo} />
      <NavLinks items={listItems} />
    </div>
  );
};
