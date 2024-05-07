import Image from "next/image";
import {title, subtitle} from '@/components/primitives'

export default function Page(){
    return (
        <div className="flex flex-row items-center justify-around mt-10">
            <div className="flex flex-col">
                <p className={title()}>Descubra los Puntos</p>
                <p className={title()}>Seguros de Barrio Amón</p>
                <p className={subtitle({class: "mt-5"})}>Identificar los puntos de encuentro es importante en una posible evacuación,así
    se crean rutas de emergencia ante cualquier eventualidad.</p> 
                <p className={subtitle()}></p> 
            </div>

            <div>
                <Image 
                src="/customers/RadarGreenLogo.png"
                width={225}
                height={100}
                className="hidden md:block"
                alt={'Screen'}
                />
            </div>
        </div>
    );
}