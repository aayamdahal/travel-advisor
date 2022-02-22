import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import useStyles from "./styles";

const containerStyle = {
  width: "inherit",
  height: "inherit",
};

const Map = () => {
  const classes = useStyles();
  const coordinates = { lat: 28.394857, lng: 84.124008 };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCyetgEUKQzcIb4r5Y80bnpztR4Jow63Qs">
      <div className={classes.mapContainer} style={{ marginTop: "1rem" }}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={5}
          margin={[50, 50, 50, 50]}
        ></GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Map;
