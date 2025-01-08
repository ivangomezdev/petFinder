
import "./footer.css";
import face from "../assets/face.png"
import ig from "../assets/ig.png"
import twit from "../assets/twitt.png"
import { Link } from "react-router";
const Footer = () => {
  return (
    <div className={"footer__cont"}>
      <p>
        ©2024 Creado por Iván Gómez, esta página esta diseñada para integrar al Portfolio, gracias por visitarla.
      </p>
     <div>
      <Link to={"/prueba"}>
      <img src={face} alt="" />
      </Link> 
      <Link  to={"https://www.instagram.com/ivansantiagoll/"}>
      <img src={ig}  alt="" />
      </Link> 
      <Link  to={"https://www.instagram.com/ivansantiagoll/"}>
      <img src={twit}  alt="" />
      </Link> 
      </div>
    </div>
  );
};

export default Footer;
