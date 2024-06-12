import { title, subtitle } from "@/components/primitives";
import { CustomCardOne, CustomCardTwo } from "@/components/card-widget";

export default function Page() {
    return (
        <section
            data-theme="black"
            className="flex flex-col py-32 px-[50px] sm:px-[120px] lg:py-40 lg:px-[60px] xl:px-[180px]"
        >
            <div className="flex flex-col items-center">
                <h1 className={title({ class: "text-center" })}>
                    Protocolos Establecidos
                </h1>
                <h1 className={title({ class: "text-center" })}>
                    Ante una Eventual Emergencia Sismológica
                </h1>
                <h2 className={subtitle({ class: "mt-4 text-center" })}>
                    Los mecanismos de emergencia son importantes para atacarlos en busca de
                    tener una comunidad organizada y prevenida ante
                    cualquier situación que los involucre.
                </h2>
            </div>

            <div className="flex flex-wrap">
                <CustomCardOne />
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="mt-14">
                    <h1 className={title({ size: "sm" })}>
                        Otras Recomendaciones
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    <CustomCardTwo />
                </div>
            </div>
        </section>
    );
}
