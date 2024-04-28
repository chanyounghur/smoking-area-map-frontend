import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

export function KakaoMap() {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
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