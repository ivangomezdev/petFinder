import { FormEvent, useEffect, useState } from "preact/compat";
import { useRecoilState } from "recoil";
import { mapPos, petsDataState, token } from "../atom/Atom";
import { useNavigate } from "react-router-dom";

const UsePetForm = () => {
  const [Mytoken] = useRecoilState(token);
  const navigate = useNavigate()
  const [petsData, setPetsData] = useRecoilState(petsDataState);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  //convert to STR
  const myMarker = useRecoilState(mapPos);
  const parseMarkerToStr = myMarker[0];
  const coords = { lat: "", lng: "" };

  const onImageChange = async (e: FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      const file = target.files[0];

      // Subir imagen a Cloudinary
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "petsImages");
      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dc5zbh38m/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        const secureData = await data.secure_url;
        setSelectedImage(secureData);
        return data.secure_url;
      } catch {
        console.error("error");
      }
    }
  };

  const petFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    coords.lat = String(parseMarkerToStr[0]);
    coords.lng = String(parseMarkerToStr[1]);

    const formData = {
      name: target.petName.value,
      src: target.petImage.src,
      lat: coords.lat,
      lng: coords.lng,
    };

    return formData;
  };

  const createPet = async (e:FormEvent) => {
    e.preventDefault()

  const formData = petFormSubmit(e);


    try {
      const petPetition = await fetch("petfinderserver.railway.internal/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Mytoken}`,
        },
        body: JSON.stringify({
         name: formData.name,
         src: formData.src,
         lat: formData.lat,
         lng: formData.lng
        }),
        
      });
     const response = await petPetition.json()
      navigate("/pets/my-pets")
     
    return response
    }  catch(error){
      console.error(error);
    }
  };

  return {
    selectedImage,
    setSelectedImage,
    parseMarkerToStr,
    onImageChange,
    petFormSubmit,
    createPet
  };
};

export default UsePetForm;
