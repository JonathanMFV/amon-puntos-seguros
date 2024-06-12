import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import "leaflet/dist/leaflet.css";

export default function Home() {
    return (
        <section className="bg-spots text-white flex flex-col py-32 px-[50px] sm:px-[120px] lg:py-40 lg:px-[60px] xl:px-[180px]">
            {/* Section Info */}
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                    <h1
                        className={title({
                            class: "text-center",
                        })}
                    >
                        Este Seguro ante una
                    </h1>
                    <div className="flex flex-row md:mt-3 pb-2">
                        <h1
                            className={title({
                                class: "text-center",
                                color: "green",
                            })}
                        >
                            Eventualidad&nbsp;
                        </h1>
                        <h1
                            className={title({
                                class: "sm:text-start text-center pb-2 hover:animate-shake",
                                color: "green",
                            })}
                        >
                            Sismológica
                        </h1>
                    </div>
                </div>
                <div>
                    <p
                        className={subtitle({
                            class: "text-center mt-5",
                        })}
                    >
                        Tenga el conocimiento de saber dónde dirigirse en una
                        emergencia sismológica dentro de{" "}
                        <span className="font-bold">Barrio Amón</span>.
                    </p>
                </div>
            </div>

            {/* Section Wigdets Info */}
            <div className="flex flex-wrap mt-14">
                <div className="flex flex-row justify-start items-center w-[100%] lg:w-1/2 mt-14">
                    <div className="card w-[100%] md:[90%] lg:w-[90%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                        <div className="flex card-body items-center md:gap-y-5 md:py-14 md:mx-14">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-bl from-[#161920] to-[#203635] border rounded-lg border-[#1f2a33]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-[#3e7e7e] feather feather-radio"
                                >
                                    <circle cx="12" cy="12" r="2"></circle>
                                    <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>
                                </svg>
                            </div>
                            <h2 className="card-title text-center text-color-green-one mt-3 md:mt-5 text-[11px] md:text-base">
                                Identifique los Puntos Seguros
                            </h2>
                            <p className="text-[9px] md:text-sm font-light text-white text-center mt-3 md:mt-5">
                                Podrá saber cuáles son los lugares más seguros y
                                amplios en caso de una emergencia.
                            </p>
                            <div className="mt-3 md:mt-5">
                                <ul>
                                    <li className="list-disc list-inside text-[9px] md:text-sm text-white  text-center font-light">
                                        Seguridad y protección.
                                    </li>
                                    <li className="list-disc list-inside text-[9px] md:text-sm text-white text-center font-light">
                                        Conteo y verificación.
                                    </li>
                                    <li className="list-disc list-inside text-[9px] md:text-sm text-white  text-center font-light">
                                        Comunicación y coordinación.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end items-center w-[100%] lg:w-1/2 mt-14">
                    <div className="card w-[100%] lg:w-[90%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                        <div className="flex card-body items-center gap-y-5 md:py-14 md:mx-14">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-bl from-[#161920] to-[#203635] border rounded-lg border-[#1f2a33]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-[#3e7e7e] feather feather-git-branch"
                                >
                                    <line x1="6" y1="3" x2="6" y2="15"></line>
                                    <circle cx="18" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M18 9a9 9 0 0 1-9 9"></path>
                                </svg>
                            </div>
                            <h2 className="card-title text-center text-color-green-one mt-3 md:mt-5 text-[11px] md:text-base">
                                Establezca Protocolos a seguir
                            </h2>
                            <p className="text-[9px] md:text-sm font-light text-white text-center mt-3 md:mt-5">
                                Se informará con los protocolos de emergencia
                                brindados por la organización comunitaria de
                                Amón.
                            </p>
                            <div className="mt-5">
                                <ul>
                                    <li className="list-disc list-inside text-[9px] md:text-sm text-white text-center font-light">
                                        Saber cómo actuar.
                                    </li>
                                    <li className="list-disc list-inside text-[9px] md:text-sm text-white text-center font-light">
                                        Aplicar los mecanismos de emergencia.
                                    </li>
                                    <li className="list-disc list-inside text-[9px] md:text-sm text-white text-center font-light">
                                        Estar organizados como comunidad.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-start items-center w-[100%] lg:w-1/2 mt-14">
                    <div className="card w-[100%] lg:w-[90%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                        <div className="flex card-body items-center gap-y-5 md:py-14 md:mx-14">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-bl from-[#161920] to-[#203635] border rounded-lg border-[#1f2a33]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-[#3e7e7e] feather feather-user"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                            <h2 className="card-title text-center text-color-green-one mt-3 md:mt-5 text-[11px] md:text-base">
                                Contacte a las autoridades
                            </h2>
                            <p className="text-[9px] md:text-sm font-light text-white text-center mt-3 md:mt-5">
                                Es de suma importancia saber a quiénes contactar
                                en caso de que ocurra cualquier incidente.
                            </p>
                            <div className="mt-5">
                                <ul>
                                    <li className="list-disc list-inside text-[9px] md:text-sm text-white text-center font-light">
                                        Evite cualquier incidente.
                                    </li>
                                    <li className="list-disc list-inside text-[9px] md:text-sm text-white text-center font-light">
                                        Cuente con profesionales.
                                    </li>
                                    <li className="list-disc list-inside text-[9px] md:text-sm text-white text-center font-light">
                                        Tenga contactos de primera mano.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end items-center w-[100%] lg:w-1/2 mt-14">
                    <div className="card w-[100%] lg:w-[90%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                        <div className="flex card-body items-center md:gap-y-5 md:py-14 md:mx-14">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-bl from-[#161920] to-[#203635] border rounded-lg border-[#1f2a33]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-[#3e7e7e] feather feather-map"
                                >
                                    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                                    <line x1="8" y1="2" x2="8" y2="18"></line>
                                    <line x1="16" y1="6" x2="16" y2="22"></line>
                                </svg>
                            </div>
                            <h2 className="card-title text-center text-color-green-one mt-3 md:mt-5 text-[10px] md:text-base">
                                Consulte los Sismos Locales
                            </h2>
                            <p className="text-[9px] md:text-sm font-light text-white text-center mt-3 md:mt-5">
                                Conocer la información verídica sobre los
                                últimos sismos sentidos es de suma importancia
                                para analizar las situaciones que puedan ocurrir
                                durante una emergencia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
