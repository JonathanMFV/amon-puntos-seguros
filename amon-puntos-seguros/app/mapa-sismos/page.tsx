"use client";

import React, { useEffect, useState } from "react";
import MapSismos from "@/components/Map-Sismos";
import { title, subtitle } from "@/components/primitives";

const Page = () => {
    const [listOfMaps, setListOfMaps] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/ovsicori");
                const data = await response.json();
                setListOfMaps(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="flex flex-col gap-4 py-8 md:py-10 mt-10 mx-4 sm:mx-12 md:mx-20 lg:mx-32">
            <h1 className={title({ size: "sm" })}>Mapa de Sismos Recientes</h1>
            <div className="z-0">
                <MapSismos listOfMaps={listOfMaps} />
            </div>
            <h4>
                Extraido de:
                <a
                    href="http://www.ovsicori.una.ac.cr/sistemas/sentidos_map/index.php"
                    target="_blank"
                >
                    {" "}
                    ovsicori{" "}
                </a>
            </h4>
        </section>
    );
};

export default Page;
