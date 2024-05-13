import Image from "next/image";
import { title, subtitle } from "@/components/primitives";

export default function Page() {
    return (
        <section className="flex flex-col gap-4 py-8 md:py-10">
            <div className="flex flex-row justify-around items-center">
                <div className="flex flex-col sm:items-start items-center">
                    <div className="flex flex-col mx-12 md:ml-20 lg:ml-32">
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
                    <div className="flex mx-12 md:ml-20 lg:ml-32">
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

                <div className="hidden md:block md:mr-20 lg:mr-32">
                    <Image
                        src="/customers/RadarGreenLogo.png"
                        width={225}
                        height={100}
                        className="hidden md:block"
                        alt={"Screen"}
                    />
                </div>
            </div>

        </section>
    );
}
