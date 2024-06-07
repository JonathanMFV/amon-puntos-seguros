"use client";

import { title } from "@/components/primitives";
import React from "react";
import Questions from "@/components/questions-widget";

import axios from "axios";
import cheerio from "cheerio";
import { map } from "leaflet";

const url = "http://www.ovsicori.una.ac.cr/sistemas/sentidos_map/index.php";

export default async function Page() {
    const fetchData = async (url: string) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(`Error fetching URL: ${error}`);
            throw error;
        }
    };

    const html = await fetchData(url);
    const $ = cheerio.load(html);
    type MapItem = Map<String, String>;
    const listOfMaps: MapItem[] = [];

    $("tr").each((index, element) => {
        const columns = $(element).find("td");
        if (index > 1) {
            const map = new Map<String, String>();
            map.set("Fecha", $(columns[0]).text());
            map.set("Hora", $(columns[1]).text());
            map.set("Magnitud", $(columns[2]).text());
            map.set("Profundidad", $(columns[3]).text());
            map.set("Localizacion", $(columns[4]).text());
            map.set("Origen", $(columns[5]).text());
            map.set("Reportado", $(columns[6]).text());
            map.set("Latitud", $(columns[7]).text());
            map.set("Longitud", $(columns[8]).text());
            listOfMaps.push(map);
        }
    });

    console.log(listOfMaps);

    return (
        <section className="flex flex-col gap-4 py-8 md:py-10 mt-10 mx-4 sm:mx-12 md:mx-20 lg:mx-32">
            "Hola"
        </section>
    );
}
