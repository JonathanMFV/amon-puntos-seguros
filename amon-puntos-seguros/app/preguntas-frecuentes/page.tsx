import  {title,subtitle} from '@/components/primitives';
import React from "react";



export default function Page(){
    return (
        <section className="flex flex-col gap-4 py-8 md:py-10">
            {/*Titulo*/}
            <div>
                <p className={title()}>Preguntas frecuentes</p>
            </div>
            {/*Secciones de preguntas*/}
            <div className='flex flex-row items-start'>
                <div className='w-1/2'>
                    <p className='flex text-start'>Hola</p>
                </div>
                <div className='w-1/2'>
                </div>
            </div>
        </section>
    );
}
