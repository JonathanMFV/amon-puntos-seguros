import Image from "next/image";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
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
                    <div className="flex  mx-12 md:ml-20 lg:ml-32">
                        <p
                            className={subtitle({
                                class: "sm:text-start text-center mt-5",
                            })}
                        >
                            Tenga el conocimiento de saber donde dirigirse en
                una emergencia sismológica dentro de <span className="font-bold">Barrio Amon</span>.
                        </p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
