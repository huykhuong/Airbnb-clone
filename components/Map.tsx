import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

interface MapProps {
  searchResults: {
    img: string;
    location: string;
    title: string;
    description: string;
    star: number;
    price: string;
    total: string;
    long: number;
    lat: number;
  }[];
}

interface MapObject {
  title: string;
  long: number;
  lat: number;
}

interface IViewPort {
  width: string;
  height: string;
  latitude: number;
  longitude: number;
  zoom: number;
}

const Map: React.FC<MapProps> = (props) => {
  const coordinates = props.searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center: false | { longitude: number; latitude: number } =
    getCenter(coordinates);

  const [viewport, setViewport] = useState<IViewPort>({
    width: "100%",
    height: "100%",
    latitude: center?.latitude,
    longitude: center?.longitude,
    zoom: 11,
  });

  const [selectedLocation, setSelectedLocation] = useState<MapObject>({
    title: "",
    long: 0,
    lat: 0,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/huykhuong/ckwz5x3kl0ycv15nsm3sb2rlb"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport: IViewPort) => setViewport(nextViewport)}
    >
      {props.searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              aria-label="push-pin"
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>

          {selectedLocation!.long === result.long ? (
            <Popup
              onClose={() =>
                setSelectedLocation({ title: "", long: 0, lat: 0 })
              }
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
