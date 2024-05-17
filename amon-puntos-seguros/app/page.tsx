import Image from "next/image";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
    return (
        <div className="flex">
            <section className="flex flex-col gap-4 py-8 md:py-10 mt-24 mx-4 sm:mx-12 md:mx-20 lg:mx-32">
                {/* Section Info */}
                <div className="flex flex-row items-center">
                    <div className="flex flex-col sm:items-start items-center">
                        <div className="flex flex-col">
                            <h1
                                className={title({
                                    class: "sm:text-start text-center",
                                })}
                            >
                                Este Seguro ante una
                            </h1>
                            <h1
                                className={title({
                                    class: "sm:text-start text-center",
                                })}
                            >
                                Eventualidad Sismológica
                            </h1>
                        </div>
                        <div className="">
                            <p
                                className={subtitle({
                                    class: "sm:text-start text-center mt-5",
                                })}
                            >
                                Tenga el conocimiento de saber donde dirigirse
                                en una emergencia sismológica dentro de{" "}
                                <span className="font-bold">Barrio Amon</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section Wigdets Info */}
                <div className="flex flex-wrap mt-14">
                    <div className="flex flex-row justify-center items-center w-[100%] lg:w-1/2 mt-14">
                        <div className="card w-[100%] md:[90%] lg:w-[80%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                            <div className="flex card-body items-center md:gap-y-5">
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
                                <p className="text-[9px] md:text-sm font-light text-color-gray-one hover:text-white text-center mt-3 md:mt-5">
                                    Podra saber cuales son los lugares mas
                                    seguros y amplios en caso de una emergencia.
                                </p>
                                <div className="mt-3 md:mt-5">
                                    <ul>
                                        <li className="list-disc list-inside text-[9px] md:text-sm text-color-gray-one text-center font-light">
                                            Seguridad y protección.
                                        </li>
                                        <li className="list-disc list-inside text-[9px] md:text-sm text-color-gray-one text-center font-light">
                                            Conteo y verificación.
                                        </li>
                                        <li className="list-disc list-inside text-[9px] md:text-sm text-color-gray-one text-center font-light">
                                            Comunicación y coordinación.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-[100%] lg:w-1/2 mt-14">
                        <div className="card w-[100%] lg:w-[80%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                            <div className="flex card-body items-center gap-y-5">
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
                                    Establezca Protocolos a seguir
                                </h2>
                                <p className="text-[9px] md:text-sm font-light text-color-gray-one hover:text-white text-center mt-3 md:mt-5">
                                    Se informara con los protocolos de
                                    emergencia brindados por la organización
                                    comunitaria de Amón.
                                </p>
                                <div className="mt-5">
                                    <ul>
                                        <li className="list-disc list-inside text-[9px] md:text-sm text-color-gray-one text-center font-light">
                                            Saber como actuar.
                                        </li>
                                        <li className="list-disc list-inside text-[9px] md:text-sm text-color-gray-one text-center font-light">
                                            Aplicar los mecanismos de
                                            emergencia.
                                        </li>
                                        <li className="list-disc list-inside text-[9px] md:text-sm text-color-gray-one text-center font-light">
                                            Estar organizados como comunidad.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-[100%] lg:w-1/2 mt-14">
                        <div className="card w-[100%] lg:w-[80%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                            <div className="flex card-body items-center gap-y-5">
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
                                    Contacte a las autoridades
                                </h2>
                                <p className="text-[9px] md:text-sm font-light text-color-gray-one hover:text-white text-center mt-3 md:mt-5">
                                    Es de suma importancia saber a quienes
                                    contactar en caso de que ocurra cualquier
                                    incidente.
                                </p>
                                <div className="mt-5">
                                    <ul>
                                        <li className="list-disc list-inside text-[9px] md:text-sm text-color-gray-one text-center font-light">
                                            Prevea cualquier incidente.
                                        </li>
                                        <li className="list-disc list-inside text-[9px] md:text-sm text-color-gray-one text-center font-light">
                                            Cuente con profesionales.
                                        </li>
                                        <li className="list-disc list-inside text-[9px] md:text-sm text-color-gray-one text-center font-light">
                                            Tenga contactos de primera mano.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-[100%] lg:w-1/2 mt-14">
                        <div className="card w-[100%] lg:w-[80%] h-[100%] bg-base-100 shadow-[0_0px_15px_-0px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_30px_-0px_rgba(0,0,0,0.4)] hover:shadow-color-green-three transition-shadow duration-300 shadow-color-green-one border border-color-green-one rounded-lg">
                            <div className="flex card-body items-center md:gap-y-5">
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
                                <h2 className="card-title text-center text-color-green-one mt-3 md:mt-5 text-[10px] md:text-base">
                                    Consulte información de conveniencia
                                </h2>
                                <p className="list-disc list-inside text-[9px] md:text-sm text-color-gray-one text-center font-light">
                                    En ciertas ocasiones ocurren ciertas dudas
                                    referente al tema de mecanismos de
                                    emergencia, en este apartado puede verificar
                                    algunas de las preguntas mas frecuentes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
