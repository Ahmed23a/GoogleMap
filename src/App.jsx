import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GoogleMaps from "./Components/GoogleMaps";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Google Map</h1>
        <GoogleMaps />
      </div>
    </>
  );
}

export default App;
