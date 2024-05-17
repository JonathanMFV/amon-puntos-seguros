import { title, subtitle } from "@/components/primitives";
import { CustomCardOne, CustomCardTwo } from "@/components/card-widget";

export default function Page() {
    return (
        <section className="flex flex-col gap-4 py-8 md:py-10 mt-10">
            <div className="flex flex-col items-center mx-12 md:mx-20 lg:mx-32">
                <h1 className={title({ class: "text-center" })}>
                    Protocolos Establecidos
                </h1>
                <h1 className={title({ class: "text-center" })}>
                    Ante una Eventual Emergencia Sismologica
                </h1>
                <h2 className={subtitle({ class: "mt-4 text-center" })}>
                    Los mecanismos de emergencia son importante atacarlos para
                    lograr tener una comunidad organizada y prevenida ante
                    cualquier situación que los involucre.
                </h2>
            </div>

            <div className="flex flex-wrap mx-10 sm:mx-24 md:mx-32 lg:mx-32 xl:mx-48 2xl:mx-72">
                <CustomCardOne />
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="mt-14">
                    <h1 className={title({ size: "sm" })}>
                        Otras Recomendaciones
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center mx-32">
                    <CustomCardTwo />
                </div>
            </div>
        </section>
    );
}
