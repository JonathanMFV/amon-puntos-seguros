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
        <section className="flex flex-col py-32 px-[50px] sm:px-[120px] lg:py-40 lg:px-[60px] xl:px-[180px]">
            <h1 className={title({ size: "sm" })}>Mapa de Sismos Recientes</h1>
            <div className="z-0">
                <MapSismos listOfMaps={listOfMaps} />
            </div>
            <h4 className="mt-2">
                Extraido de:&nbsp;
                <a
                    href="http://www.ovsicori.una.ac.cr/sistemas/sentidos_map/index.php"
                    target="_blank"
                    className="hover:text-color-green-three"
                >
                    http://www.ovsicori.una.ac.cr/sistemas/sentidos_map/index.php
                </a>
            </h4>
        </section>
    );
};

export default Page;
