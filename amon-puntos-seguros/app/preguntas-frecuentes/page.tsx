import { title } from "@/components/primitives";
import React from "react";
import Questions from "@/components/questions-widget";

export default function Page() {
    return (
        <section className="flex flex-col gap-4 py-8 md:py-10 mt-10 mx-4 sm:mx-12 md:mx-20 lg:mx-32">
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
