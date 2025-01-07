import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "preact/compat";
import { useRecoilState } from "recoil";
import { token } from "../atom/Atom";
import { formController } from "../controllers/FormController";

//hook reg y log
const useAuth = () => {
  const [myToken, setToken] = useRecoilState(token);
  const navigate = useNavigate(); // Hook de navegación

  // Función para manejar el registro
  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    const formData = formController(e);

    try {
      const response = await fetch("http://localhost:3000/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const res = await response.json();

      // Navega a la página de login después del registro exitoso
      if (res) {
        navigate("/login");
      }

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  // Función para manejar el login
  const loginUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = formController(e);

    try {
      const response = await fetch("http://localhost:3000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const res = await response.json();

      if (res !== "null") {
        setToken(res);
        navigate("/user");
      } else {
        alert("Usuario y/o contraseña incorrectos.");
      }

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    registerUser,
    loginUser,
  };
};

export default useAuth;
