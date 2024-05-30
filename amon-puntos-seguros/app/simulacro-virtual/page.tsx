"use-client";

import { title, subtitle } from "@/components/primitives";
import MapAPI from "@/components/Map";

export default function Page() {
    return (
        <section className="flex flex-col gap-4 py-8 md:py-10 mt-10">
            {/* Section info */}
            <div className="flex flex-col justify-center items-center">
                <div>
                    <h1 className={title()}>Ruta de Evacuación</h1>
                    <h2
                        className={subtitle({
                            class: "text-center text-color-gray-one",
                        })}
                    >
                        Siga los siguientes pasos
                    </h2>
                </div>
            </div>
            {/* Content */}
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-color-green-three">
                    <p className="text-color-green-three font-bold text-lg">
                        1
                    </p>
                </div>
                <div className="flex items-center justify-center w-2 h-2 rounded-full border border-color-green-three mt-2" />
                <div className="flex items-center justify-center w-2 h-2 rounded-full border border-color-green-three mt-2" />
                <div className="flex items-center justify-center w-2 h-2 rounded-full border border-color-green-three mt-2" />
                <div className="flex flex-row justify-center items-center w-[100%] sm:w-[50%] lg:w-[30%] mt-4">
                    <div className="card w-[100%] lg:w-[90%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                        <div className="card-body items-center">
                            <h2 className="card-title text-center text-color-green-one text-xs md:text-base">
                                Conserve la calma
                            </h2>
                            <p className="text-xs md:text-sm text-center">
                                Si se encuentra bajo techo, protéjase de la
                                caída de objetos. No corra hacia las puertas,
                                espere que el sismo concluya para movilizarse.
                                Protéjase cerca de marcos de puertas, columnas o
                                áreas señaladas con seguridad sismica.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-2 h-2 rounded-full border border-color-green-three mt-2" />
                <div className="flex items-center justify-center w-2 h-2 rounded-full border border-color-green-three mt-2" />
                <div className="flex items-center justify-center w-2 h-2 rounded-full border border-color-green-three mt-2" />
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-color-green-three mt-2">
                    <p className="text-color-green-three font-bold text-lg">
                        2
                    </p>
                </div>
                <div className="flex items-center justify-center w-2 h-2 rounded-full border border-color-green-three mt-2" />
                <div className="flex items-center justify-center w-2 h-2 rounded-full border border-color-green-three mt-2" />
                <div className="flex items-center justify-center w-2 h-2 rounded-full border border-color-green-three mt-2" />
                <div className="flex flex-row justify-center items-center w-[100%] md:w-[70%] lg:w-[50%] mt-4">
                    <div className="card w-[100%] lg:w-[90%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                        <div className="card-body items-center">
                            <h2 className="card-title text-center text-color-green-one text-xs md:text-base">
                                Evacue al punto seguro mas cercano
                            </h2>
                            
                            <MapAPI />
                            <p className="text-xs md:text-sm text-center">
                                Destino:
                            </p>
                            <p className="text-xs font-bold md:text-sm text-center">
                                Parque Zoológico y Jardin Bootanico Simon
                                Bolivar
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-2 h-2 rounded-full border border-color-green-three mt-2" />
                <div className="flex items-center justify-center w-2 h-2 rounded-full border border-color-green-three mt-2" />
                <div className="flex items-center justify-center w-2 h-2 rounded-full border border-color-green-three mt-2" />
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-color-green-three mt-2">
                    <p className="text-color-green-three font-bold text-lg">
                        3
                    </p>
                </div>
                <div className="flex flex-row justify-center items-center w-[100%] sm:w-[70%] lg:w-[40%] mt-4">
                    <div className="card w-[100%] lg:w-[90%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                        <div className="card-body items-center">
                            <h2 className="card-title text-center text-color-green-one text-xs md:text-base">
                                De ser necesario contacte a las autoridades de
                                emergencia
                            </h2>

                            <div className="flex flex-wrap w-full mt-4">
                                <div className="flex justify-center items-center w-1/2">
                                    <a
                                        href=""
                                        className="btn text-[9px] lg:text-[13px] border-color-green-one text-color-green-one hover:bg-color-green-one hover:text-black btn-xs sm:btn-sm rounded-lg bg-[7ac7a9] w-[90%]"
                                    >
                                        Llamar a la Policia
                                    </a>
                                </div>
                                <div className="flex justify-center items-center w-1/2">
                                    <a
                                        href=""
                                        className="btn text-[9px] lg:text-[13px] border-color-green-one text-color-green-one hover:bg-color-green-one hover:text-black btn-xs sm:btn-sm rounded-lg bg-[7ac7a9] w-[90%]"
                                    >
                                        Llamar a los Bomberos
                                    </a>
                                </div>
                                <div className="flex justify-center items-center w-1/2 mt-4">
                                    <a
                                        href=""
                                        className="btn text-[9px] lg:text-[13px] border-color-green-one text-color-green-one hover:bg-color-green-one hover:text-black btn-xs sm:btn-sm rounded-lg bg-[7ac7a9] w-[90%]"
                                    >
                                        Llamar a la Cruz Roja
                                    </a>
                                </div>
                                <div className="flex justify-center items-center w-1/2 mt-4">
                                    <a
                                        href=""
                                        className="btn text-[9px] lg:text-[13px] border-color-green-one text-color-green-one hover:bg-color-green-one hover:text-black btn-xs sm:btn-sm rounded-lg bg-[7ac7a9] w-[90%]"
                                    >
                                        Llamar al 9-1-1
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
