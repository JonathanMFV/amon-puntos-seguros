
import Image from 'next/image';
import Contacts from "@/components/contacts-widget";
import {title, subtitle} from '@/components/primitives';
import clsx from 'clsx';
import { color } from 'framer-motion';


export default function Page(){

    return (
        <section className="flex flex-col gap-4 py-8 md:py-10">

            <div className="flex flex-row justify-around items-center">

                <div className="flex flex-col sm:items-start items-center">
                    <div className='flex flex-row'>
                        <h1 className={title({class:"sm:text-start text-center"})}>Contactos Autoridades de&nbsp;</h1>
                        <h1 className={title({class:"sm:text-start text-center",color:"green"})}> Auxilio</h1>
                    </div>
                    <div className='flex'>
                        <p className={subtitle({class:"sm:text-start text-center mt-5"})}>Los contactos que se muestran son de las regiones más cercanas de Barrio Amón.</p>
                    </div>
                </div>

                <div className='hidden md:block'>
                    <Image 
                    src="/customers/MedicGreenLogo.png"
                    width={160}
                    height={100}
                    alt={'Screen'}
                    />
                </div>

            </div>

            <div className="flex flex-wrap items-center justify-around">
                <Contacts/>
            </div>

        </section>
    );
}