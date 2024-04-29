import { useGeoLocation } from "@utils";
import { useEffect, useRef, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export function KakaoMap() {
  const mapRef = useRef<kakao.maps.Map>(null);

  const { coordinates, isLoading, error } = useGeoLocation();

  const [geoLocations, setGeoLocations] = useState({
    lat: 33.5563,
    lng: 126.79581,
  });

  useEffect(() => {
    if (!isLoading && !error && coordinates.lat && coordinates.lng) {
      setGeoLocations({
        lat: coordinates.lat,
        lng: coordinates.lng,
      });
    }
  }, [coordinates, isLoading, error]);

  console.log(coordinates, isLoading, error);

  return (
    <Map
      ref={mapRef}
      center={geoLocations}
      style={{
        width: "100vw",
        height: "100vh",
      }}
      level={3}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }} />
    </Map>
  );
}
