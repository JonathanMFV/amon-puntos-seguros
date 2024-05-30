"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Usa dynamic import para deshabilitar SSR
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

export default function MapAPI() {
    const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 }); // Valores por defecto
    const [destiny, setDestiny] = useState({ lat: 9.938397, lng: -84.075372 });
    const [hasLocation, setHasLocation] = useState(false);

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

    return (
        <div className="w-full z-0 h-[400px]">
            <div className="w-[100%] h-[100%]">
                <MapContainer
                    className="w-[100%] h-[100%]"
                    center={[destiny.lat, destiny.lng]}
                    zoom={16}
                    scrollWheelZoom
                >
                    <TileLayer
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {hasLocation && (
                        <Marker position={[destiny.lat, destiny.lng]}>
                            <Popup>Estás aquí.</Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
        </div>
    );
}
