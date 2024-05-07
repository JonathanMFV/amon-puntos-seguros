import  {title,subtitle} from '@/components/primitives';
import React from "react";
import { Accordion, AccordionItem } from '@nextui-org/accordion';



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
                    <Accordion isCompact>
                        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                            hola
                        </AccordionItem>
                        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                            hola
                        </AccordionItem>
                        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                            hola
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
