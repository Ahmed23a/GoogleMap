import React, { useRef, useState } from "react";
import {
  GoogleMap,
  Polygon,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Polygons } from "../Data/Data";

export default function GoogleMaps() {
  //States
  const selectedPolygon = useRef(null);

  const egyptPosition = useRef({
    lat: 26.8206,
    lng: 30.8025,
  });

  const [isOpen, setIsOpen] = useState(false);

  // Helper Functions

  const handlePolygonClick = (polygonInfo) => {
    selectedPolygon.current = polygonInfo;
    setIsOpen(true);
  };

  // Confg
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "You",
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
        console.log(polygonKey, Polygons[polygonKey].position);
        const polygon = Polygons[polygonKey];
        return (
          <>
            <Polygon
              key={index}
              paths={polygon.position}
              options={polygon.style}
              onClick={() => handlePolygonClick(polygon)}
            />

            <Marker
              position={polygon.center}
              onClick={() => handlePolygonClick(polygon)}
              icon={{
                url: polygon.icon,
                scaledSize: new window.google.maps.Size(30, 30),
                borderRadius: "50%",
              }}
            />
          </>
        );
      })}

      {isOpen && (
        <InfoWindow
          position={selectedPolygon.current.center}
          onCloseClick={() => setIsOpen(false)}
        >
          <div>{selectedPolygon.current.info}</div>
        </InfoWindow>
      )}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}
