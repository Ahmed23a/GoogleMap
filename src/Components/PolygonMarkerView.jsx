import { InfoWindow, Marker, Polygon } from "@react-google-maps/api";
import React, { useRef, useState } from "react";

export default function PolygonMarkerView({ polygon, onClick }) {
  return (
    <>
      <Polygon
        paths={polygon.position}
        options={polygon.style}
        onClick={() => onClick(polygon)}
      />

      <Marker
        position={polygon.center()}
        onClick={() => onClick(polygon)}
        icon={{
          url: polygon.icon,
          scaledSize: new window.google.maps.Size(30, 30),
          borderRadius: "50%",
        }}
      />
    </>
  );
}
