"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for react-leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function MapPoints({ changeSelectedMarker }) {
  const places = [
    {
      id: "1",
      name: "Parque Zoológico y Jardín Botánico Nacional Simón Bolívar",
      lat: 9.938649401136207,
      long: -84.07328430635145,
      images: [
        "/customers/simon-bolivar-1.jpg",
        "/customers/simon-bolivar-2.jpg",
      ],
      characteristics: [
        "Lugar amplio.",
        "Prevención de caída de infraestructura.",
        "Alberga cantidad masiva de personas en caso de emergencia.",
        "Solo un acceso.",
      ],
    },
    {
      id: "2",
      name: "Estación de Bomberos Metropolitana Norte",
      lat: 9.939547477912928,
      long: -84.07850067831288,
      images: ["/customers/metro-norte-1.jpg", "/customers/metro-norte-2.jpg"],
      characteristics: [
        "Servicios de emergencia.",
        "Diferentes accesos.",
        "Lugar amplio.",
      ],
    },
    {
      id: 3,
      name: "Hospital Rafael Angel Calderon Guardia",
      lat: 9.937000628002455,
      long: -84.06953137147669,
      images: [
        "/customers/rafael-angel-1.jpg",
        "/customers/rafael-angel-2.jpg",
      ],
      characteristics: [
        "Servicios de emergencia.",
        "Diferentes accesos.",
        "Atención 24/7.",
      ],
    },
    {
      id: 4,
      name: "Parque Morazán",
      lat: 9.935669072003385,
      long: -84.07551806224133,
      images: [
        "/customers/parque-morazan-1.jpg",
        "/customers/parque-morazan-2.jpg",
      ],
      characteristics: [
        "Espacios abiertos.",
        "Diferentes accesos.",
        "Abierto 24/7.",
        "Potencial punto de reunión",
        "Zonas verdes",
      ],
    },
    {
      id: 5,
      name: "Parque España",
      lat: 9.93616576415917,
      long: -84.07364051592039,
      images: [
        "/customers/parque-espana-1.jpg",
        "/customers/parque-espana-2.jpg",
      ],
      characteristics: [
        "Espacios abiertos.",
        "Diferentes accesos.",
        "Abierto 24/7.",
        "Potencial punto de reunión",
        "Zonas verdes",
      ],
    },
    {
      id: 6,
      name: "Monumento Nacional",
      lat: 9.934946103226553,
      long: -84.07076811677182,
      images: [
        "/customers/monumento-nacional-san-jose-1.jpg",
        "/customers/monumento-nacional-san-jose-2.jpg",
      ],
      characteristics: [
        "Espacios abiertos.",
        "Diferentes accesos.",
        "Abierto 24/7.",
        "Potencial punto de reunión",
        "Zonas verdes",
        "Valor histórico",
      ],
    },
  ];
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });
  const [destiny, setDestiny] = useState({ lat: 9.938397, lng: -84.075372 });
  const [hasLocation, setHasLocation] = useState(false);
  const [bounds, setBounds] = useState(null); // Initialize bounds state

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setHasLocation(true);
        },
        (error) => {
          console.error("Error obteniendo la ubicación: ", error);
        }
      );
    } else {
      console.error("Geolocation no es soportado por este navegador.");
    }
  }, []);

  useEffect(() => {
    // Initialize bounds only on the client-side
    if (typeof window !== "undefined") {
      const { LatLngBounds } = require("leaflet");
      setBounds(
        new LatLngBounds(
          [9.934390350536448, -84.07971303665425], // Suroeste
          [9.940561985126786, -84.06775038475789] // Noreste
        )
      );
    }
  }, []);

  return (
    <div className="h-[200px] z-0 sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-[100%] mt-5">
      <div className="w-[100%] h-[100%]">
        {bounds && (
          <MapContainer
            className="w-[100%] h-[100%]"
            center={[destiny.lat, destiny.lng]}
            zoom={16}
            scrollWheelZoom
            maxBounds={bounds}
            maxBoundsViscosity={1.0}
          >
            <TileLayer
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map((place) => (
              <Marker
                key={place.id}
                position={[place.lat, place.long]}
                eventHandlers={{
                  click: () => {
                    changeSelectedMarker(place);
                  },
                }}
              >
                <Popup>{place.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </div>
    </div>
  );
}
