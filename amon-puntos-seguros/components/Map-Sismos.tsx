"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import axios from "axios";
import cheerio from "cheerio";

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

export default function MapSismos({ listOfMaps }) {
    const [destiny, setDestiny] = useState({ lat: 10.112143, lng: -84.246276 }); //10.112143, -84.246276
    const [bounds, setBounds] = useState(null); // Initialize bounds state

    useEffect(() => {
        // Initialize bounds only on the client-side
        if (typeof window !== "undefined") {
            const { LatLngBounds } = require("leaflet");
            setBounds(
                new LatLngBounds(
                    [8.632156, -85.991804], // Suroeste
                    [10.951911, -82.4649] // Noreste
                )
            );
        }
    }, []);

    return (
        <div className="h-[200px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-[100%] mt-5">
            <div className="w-[100%] h-[100%]">
                {bounds && (
                    <MapContainer
                        className="w-[100%] h-[100%]"
                        center={[destiny.lat, destiny.lng]}
                        zoom={8.3}
                        scrollWheelZoom
                        maxBounds={bounds}
                        maxBoundsViscosity={1.0}
                    >
                        <TileLayer
                            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {listOfMaps.map((map, index) => (
                            <div key={index}>
                                {Object.entries(map).map(
                                    ([key, value], idx) => (
                                        <Marker
                                            key={idx}
                                            position={[
                                                Number(map.Latitud),
                                                Number(map.Longitud),
                                            ]}
                                        >
                                            <Popup>
                                                <tbody>
                                                    <tr>
                                                        <td className=" bg-[#DEDEEF]">
                                                            Magnitud
                                                        </td>
                                                        <td className="bg-[#DEDEEF]">
                                                            {map.Magnitud}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Profundidad</td>
                                                        <td>
                                                            {map.Profundidad}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bg-[#DEDEEF]">
                                                            Fecha y Hora:
                                                        </td>
                                                        <td className="bg-[#DEDEEF]">
                                                            {`${map.Fecha} ${map.Hora}`}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Localizacion</td>
                                                        <td>
                                                            {map.Localizacion}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="bg-[#DEDEEF]">
                                                            Origen
                                                        </td>
                                                        <td className="bg-[#DEDEEF]">
                                                            {map.Origen}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Popup>
                                        </Marker>
                                    )
                                )}
                            </div>
                        ))}
                    </MapContainer>
                )}
            </div>
        </div>
    );
}
