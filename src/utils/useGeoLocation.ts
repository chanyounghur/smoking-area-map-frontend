import { useEffect, useRef, useState } from "react";

export const useGeoLocation = (options?: PositionOptions) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<GeolocationPositionError>();
  const [coordinates, setCoordinates] = useState<{
    lat: number | null;
    lng: number | null;
  }>({ lat: null, lng: null });

  const optionsRef = useRef(options);

  useEffect(() => {
    const onSuccess = (event: GeolocationPosition) => {
      setCoordinates({
        lat: event.coords.latitude,
        lng: event.coords.longitude,
      });
      setIsLoading(false);
    };

    const onError = (error: GeolocationPositionError) => {
      setError(error);
      setIsLoading(false);
    };

    navigator.geolocation.getCurrentPosition(
      onSuccess,
      onError,
      optionsRef.current
    );

    const watch = navigator.geolocation.watchPosition(
      onSuccess,
      onError,
      optionsRef.current
    );

    return () => navigator.geolocation.clearWatch(watch);
  }, []);

  return { isLoading, error, coordinates };
};
