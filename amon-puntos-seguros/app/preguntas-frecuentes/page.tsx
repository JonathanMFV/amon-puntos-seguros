import { title } from "@/components/primitives";
import React from "react";
import Questions from "@/components/questions-widget";

export default function Page() {
    return (
        <section className="flex flex-col gap-4 py-8 md:py-10">
            {/* Titulo */}
            <div className="flex mx-12 md:mx-20 lg:mx-32">
                <p className={title()}>Preguntas frecuentes</p>
            </div>
            {/* Secciones de preguntas */}
            <div className="flex flex-col justify-between mx-12 md:mx-20 lg:mx-32 mt-14">
                    <Questions/>
            </div>
        </section>
    );
}
