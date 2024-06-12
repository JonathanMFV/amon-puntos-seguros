import { title } from "@/components/primitives";
import React from "react";
import Questions from "@/components/questions-widget";

export default function Page() {
    return (
        <section className="flex flex-col py-32 px-[50px] sm:px-[120px] lg:py-40 lg:px-[60px] xl:px-[180px]">
            {/* Titulo */}
            <div className="flex">
                <p className={title()}>Preguntas frecuentes</p>
            </div>
            {/* Secciones de preguntas */}
            <div className="flex flex-col justify-between mt-20">
                <Questions />
            </div>
        </section>
    );
}
