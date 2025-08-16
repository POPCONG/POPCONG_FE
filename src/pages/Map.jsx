import React, { useState, useEffect } from "react";
import { useGeoLocation } from "../hooks/useGeoLocation";
import KakaoMap from "../components/KakaoMap";

//gps 옵션
const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

const Map = () => {
  const { location, error } = useGeoLocation(geolocationOptions);
  const [currentLocation, setCurrentLocation] = useState(location);
  //맨 처음 위치
  useEffect(() => {
    if (!location) return;
    setCurrentLocation(location);
  }, [location]);

  return (
    <div style={{ height: "100vh", width: "100%", display: "flex" }}>
      <div style={{ flex: 1 }}>
        <KakaoMap
          lat={currentLocation ? currentLocation.latitude : undefined}
          lng={currentLocation ? currentLocation.longitude : undefined}
        />
      </div>
    </div>
  );
};

export default Map;
