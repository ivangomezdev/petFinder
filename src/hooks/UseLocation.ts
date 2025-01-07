import React, { useState, useEffect } from 'react';

function UseLocation() {
  const [coords, setCoords] = useState({ lat: 0 as Number, lng: 0 as number });

  useEffect(() => {
    const getLocation = () => {
    
        if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCoords({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          (error) => {
            console.error("Error obteniendo la ubicación:", error);
          }
        );
      } else {
        console.error("Geolocation no es soportada por este navegador.");
      }
    };
    getLocation()
  }, []);
  

}

export default UseLocation;