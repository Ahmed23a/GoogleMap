import { useRef, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Polygons } from "../Data/Data";
import PolygonMarkerView from "./PolygonMarkerView";
import InfoPopUp from "./InfoPopUp";

export default function GoogleMaps() {
  //States
  const selectedPolygon = useRef(null);
  const egyptPosition = useRef({
    lat: 26.8206,
    lng: 30.8025,
  });

  const [isOpen, setIsOpen] = useState(false);

  const handlePolygonClick = (polygon) => {
    selectedPolygon.current = polygon;
    setIsOpen((prev) => !prev);
  };

  // Confg
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "Your API KEY",
  });

  const containerStyle = {
    width: "75vh",
    height: "75vh",
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={egyptPosition.current}
      zoom={10}
    >
      {Object.keys(Polygons).map((polygonKey, index) => {
        const polygon = Polygons[polygonKey];
        return (
          <PolygonMarkerView
            key={index}
            polygon={polygon}
            onClick={handlePolygonClick}
          />
        );
      })}

      {isOpen && (
        <InfoPopUp selectedPolygon={selectedPolygon} setIsOpen={setIsOpen} />
      )}
    </GoogleMap>
  ) : (
    <></>
  );
}
