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

interface Location {
    name?: String;
    latitude: number;
    longitude: number;
}

const locations: Location[] = [
    {
        name: "Parque Zoológico y Jardín Botánico Nacional Simón Bolívar",
        latitude: 9.938649401136207,
        longitude: -84.07328430635145,
    },
    {
        name: "Estación de Bomberos Metropolitana Norte",
        latitude: 9.939547477912928,
        longitude: -84.07850067831288,
    },
    {
        name: "Hospital Rafael Angel Calderon Guardia",
        latitude: 9.937000628002455,
        longitude: -84.06953137147669,
    },
    {
        name: "Parque Morazán",
        latitude: 9.935669072003385,
        longitude: -84.07551806224133,
    },
    {
        name: "Parque España",
        latitude: 9.93616576415917,
        longitude: -84.07364051592039,
    },
    {
        name: "Monumento Nacional",
        latitude: 9.934946103226553,
        longitude: -84.07076811677182,
    },
];

function haversineDistance(loc1: Location, loc2: Location): number {
    const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

    const R = 6371;
    const dLat = toRadians(loc2.latitude - loc1.latitude);
    const dLon = toRadians(loc2.longitude - loc1.longitude);

    const lat1 = toRadians(loc1.latitude);
    const lat2 = toRadians(loc2.latitude);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) *
            Math.sin(dLon / 2) *
            Math.cos(lat1) *
            Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Retorna la distancia en kilómetros
}

export default function MapAPI({ changePosUrl }) {
    const defaultLocation: Location = {
        latitude: 0,
        longitude: 0,
        name: "Ubicación por defecto",
    };
    const defaultDestiny: Location = {
        latitude: 10,
        longitude: 10,
        name: "Destino por defecto",
    };
    const [location, setLocation] = useState<Location>(defaultLocation);
    const [destiny, setDestiny] = useState<Location>(defaultDestiny);
    const [hasLocation, setHasLocation] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        name: "GeoLocation",
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
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
        if (hasLocation) {
            try {
                let minDistance = haversineDistance(location, locations[0]);
                let closestLocation = locations[0];
                for (const loc of locations) {
                    const distance = haversineDistance(location, loc);
                    if (distance < minDistance) {
                        closestLocation = loc;
                        minDistance = distance;
                    }
                }
                setDestiny(closestLocation);
                
            } catch (error) {
                console.error("Error obteniendo el destino.", error);
            }
        }
    }, [hasLocation, location]);

    changePosUrl(destiny);

    return (
        <div className="w-full z-0 h-[200px] md:h-[250px]">
            <div className="w-[100%] h-[100%]">
                <MapContainer
                    className="w-[100%] h-[100%]"
                    center={[destiny.latitude, destiny.longitude]}
                    zoom={16}
                    scrollWheelZoom
                >
                    <TileLayer
                        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {hasLocation && (
                        <Marker
                            position={[destiny.latitude, destiny.longitude]}
                        >
                            <Popup>{destiny.name}</Popup>
                        </Marker>
                    )}
                </MapContainer>
            </div>
        </div>
    );
}
