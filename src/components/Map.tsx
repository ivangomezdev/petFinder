import { Map, Marker } from "pigeon-maps";
import "./map.css";
import { useState } from "preact/hooks";
import { useSetRecoilState } from "recoil";
import { mapPos } from "../atom/Atom";
export function MyMap() {
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    -34.65626636930864, -58.648067934623484,
  ]);
  const setPosMap = useSetRecoilState(mapPos);
  setPosMap(markerPosition);
  return (
    <Map
      height={200}
      defaultCenter={[-34.65626636930864, -58.648067934623484]} // Centro inicial del mapa
  
      onClick={({ latLng }) => setMarkerPosition(latLng)} // Actualiza el marcador al hacer clic
    >
      <Marker
        width={50}
        anchor={markerPosition} // Posición dinámica del marcador
      />
    </Map>
  );
}
