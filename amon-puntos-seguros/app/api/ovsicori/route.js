import axios from "axios";
import cheerio from "cheerio";

const url = "http://www.ovsicori.una.ac.cr/sistemas/sentidos_map/index.php";

const fetchData = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching URL: ${error}`);
        throw error;
    }
};

const parseHTML = (html) => {
    const $ = cheerio.load(html);
    const listOfMaps = [];

    $("tr").each((index, element) => {
        const columns = $(element).find("td");
        if (index > 1) {
            const map = {
                Fecha: $(columns[0]).text(),
                Hora: $(columns[1]).text(),
                Magnitud: $(columns[2]).text(),
                Profundidad: $(columns[3]).text(),
                Localizacion: $(columns[4]).text(),
                Origen: $(columns[5]).text(),
                Reportado: $(columns[6]).text(),
                Latitud: $(columns[7]).text(),
                Longitud: $(columns[8]).text(),
            };
            listOfMaps.push(map);
        }
    });

    return listOfMaps;
};

export async function GET(request) {
    const html = await fetchData();
    const listOfMaps = parseHTML(html);
    return new Response(JSON.stringify(listOfMaps), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
