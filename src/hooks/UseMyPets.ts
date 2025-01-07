import React, { FormEvent, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { allPetsData, petsDataState, token } from "../atom/Atom";

const useData = () => {
  const [pruebaData, setPruebaData] = useRecoilState(petsDataState);
  const [allUserPetsData, setAllUserPetsData] = useRecoilState(allPetsData);
  const Mytoken = useRecoilValue(token);

  const showMyPets = async () => {
    try {
      const response = await fetch("http://localhost:3000/me/pets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Mytoken}`,
        },
      });
      const responseData = await response.json();
      setPruebaData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deletePet = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/me/pets/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Mytoken}`,
        },
      });
      const responseData = await response.json();
      setPruebaData(responseData);
      return pruebaData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const petsFetch = async () => {
    const response = await fetch("http://localhost:3000/pets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const parsedData = await response.json();
    setAllUserPetsData(parsedData);
 

    return allUserPetsData;
  };

  const editPets = async (
    id: string,
    formData: { petName: string; lat: string; lng: string }
  ) => {
    

    try {
      const response = await fetch(`http://localhost:3000/me/pets/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Mytoken}`,
        },
        body: JSON.stringify({
          name: formData.petName,
          _geoloc: {
            lat: formData.lat,
            lng: formData.lng,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

    
    } catch (error) {
      console.error("Error updating pet:", error);
    }
  };
  useEffect(() => {
    showMyPets();
    petsFetch();
  }, []);

  return { pruebaData, deletePet, petsFetch, editPets };
};

export default useData;
