
import Button from "../ui/Button";
import "./userConfig.css";
import { Link } from "react-router";
import SessionUid from "../components/SessionUid";
import { useRecoilValue } from "recoil";
import { userData } from "../atom/Atom";

const UserConfigPage = () => {
  const fetchUserData = useRecoilValue(userData);
  
  return (
    <>
      <h2 className={"authPage__title"}>Mis datos </h2>  
    <div className={"userPage__cont"}>
      
      <Link to={"/user/data"}>
        <Button text="Modificar datos personales" />
      </Link>
      <Link to={"/user/password"}>
      <Button text="Modificar password" />
      </Link>
      <SessionUid  closeSes={true} username={fetchUserData.username} />
    </div>
    </>
  );
};

export default UserConfigPage;
