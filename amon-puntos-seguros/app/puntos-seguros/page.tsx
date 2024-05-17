/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";

export default function Page() {
    return (
        <div className="flex">
            <section className="flex flex-col gap-4 py-8 md:py-10 mt-24">
                {/* Section info */}
                <div className="flex flex-row items-center mx-32">
                    <div className="flex flex-col sm:items-start items-center mr-14">
                        <div className="flex flex-col">
                            <h1
                                className={title({
                                    class: "sm:text-start text-center",
                                })}
                            >
                                Descubra los Puntos
                            </h1>
                            <h1
                                className={title({
                                    class: "sm:text-start text-center",
                                })}
                            >
                                Seguros de Barrio Amón
                            </h1>
                        </div>
                        <div className="flex">
                            <p
                                className={subtitle({
                                    class: "sm:text-start text-center mt-5",
                                })}
                            >
                                Identificar los puntos de encuentro es importante en
                                una posible evacuación,así se crean rutas de
                                emergencia ante cualquier eventualidad.
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Image
                            src="/customers/RadarGreenLogo.png"
                            width={225}
                            height={100}
                            className="hidden md:block"
                            alt={"Screen"}
                        />
                    </div>
                </div>

                {/* Section Map */}
                <div className="flex flex-col justify-center items-start mt-20 mx-12 md:mx-20 lg:mx-32">
                    <div className="">
                        <div className="">
                            <h1 className={title({ size: "sm" })}>
                                Seleccione el lugar a descubrir
                            </h1>
                        </div>
                    </div>
                    <div className="h-[200px] sm:h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] w-[100%] mt-5 bg-slate-500">
                        {/* Aqui debe ir el mapa de openstreetmap */}
                    </div>
                </div>

                {/* Section Info */}
                <div className="flex flex-col justify-between mx-12 md:mx-20 lg:mx-32 mt-10">
                    <div className="flex flex-row">
                        {/* Titulo */}
                        <div className="w-1/3 mr-20">
                            <p
                                className={title({
                                    size: "sm",
                                })}
                            >
                                Parque Zoológico y Jardin Bootanico Simon Bolivar
                            </p>
                        </div>
                        <div className="flex flex-col w-2/3">
                            {/* Caracteristicas */}
                            <div className="flex flex-col">
                                <div>
                                    <p
                                        className={title({
                                            size: "sm",
                                        })}
                                    >
                                        Caracteristicas
                                    </p>
                                </div>
                                <div className="mt-5">
                                    <ul>
                                        <li className="list-disc list-inside">
                                            Lugar amplio.
                                        </li>
                                        <li className="list-disc list-inside">
                                            Prevención de caída de infraestructura.
                                        </li>
                                        <li className="list-disc list-inside">
                                            Alberga cantidad masiva de personas en
                                            caso de emergencia.
                                        </li>
                                        <li className="list-disc list-inside">
                                            Solo un acceso.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Fotografias */}
                            <div className="flex flex-col mt-10">
                                <p
                                    className={title({
                                        size: "sm",
                                    })}
                                >
                                    Fotografias
                                </p>
                                <div className="mt-5">
                                    <div className="carousel carousel-end rounded-lg">
                                        <div className="carousel-item">
                                            <img
                                                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                                                alt="Drink"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                                                alt="Drink"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                                                alt="Drink"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                                                alt="Drink"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                                                alt="Drink"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                                                alt="Drink"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                                                alt="Drink"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
