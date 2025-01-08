
import { useRecoilValue } from "recoil";
import { FormEvent} from "react";
import { token } from "../atom/Atom";
import { formController } from "../controllers/FormController";
import { useNavigate } from 'react-router';




const UseFetchWToken = () => {
  const Mytoken = useRecoilValue(token);
  const redirect = useNavigate()

  const editUserData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = formController(e);

    try {
      const response = await fetch("https://petfinderserver-production.up.railway.app/me", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Mytoken}`,
        },
        body: JSON.stringify({
          name: formData.name,
          province: formData.province,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const parsedData = await response.json();
      alert("datos modificados correctamente")
      redirect("/user")
      return parsedData;

    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };

  return (
    editUserData
  )


}

export default UseFetchWToken;
