import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const MyMap = ({ checkBoxChecked }) => {
  const positions = checkBoxChecked.map(
    (checkBox) => checkBox.attributes.marker
  );

  return (
    <div>
      <p className="text-white text-[0.8rem] mb-[1em]">
        (Pour plus d'informations, cliquer sur le ou les marqueurs)
      </p>
      <MapContainer
        center={[48.7531743973979, 2.4631967270363555]}
        zoom={15}
        className="h-[300px] w-[100%] rounded-lg  z-[20]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {positions.map((position) =>
          position.map((marker, index) => (
            <Marker position={marker.position}>
              <Circle
                key={index}
                center={marker.position}
                radius={marker.radius}
                color={marker.color}
                stroke={marker.stroke}
              >
                <Popup>{marker.nom}</Popup>
              </Circle>
            </Marker>
          ))
        )}
      </MapContainer>
    </div>
  );
};
