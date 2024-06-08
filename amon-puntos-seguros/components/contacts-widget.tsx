import clsx from "clsx";
import Image from "next/image";
import { subtitle } from "./primitives";

const info = [
    {
        id: "0",
        title: "Fuerza Pública El Carmen",
        number: "+506 22224171",
        bg_image: "/customers/FuerzaPublicaIlustracion.jpg",
        icon: "/customers/FuerzaPublicaIcon.png",
        href: "tel:+50622224171",
    },
    {
        id: "1",
        title: "Bomberos Metropolitana Norte",
        number: "+506 22207880",
        bg_image: "/customers/BomberosIlustracion.png",
        icon: "/customers/BomberosIcon.png",
        href: "tel:+50622207880",
    },
    {
        id: "3",
        title: "Cruz Roja Metropolitana",
        number: "+506 25425004",
        bg_image: "/customers/CruzRojaIlustracion.jpg",
        icon: "/customers/CruzRojaIcon.gif",
        href: "tel:+50625425004",
    },
    {
        id: "4",
        title: "Emergencias",
        number: "991",
        bg_image: "/customers/911Ilustracion.avif",
        icon: "/customers/911Icon.gif",
        href: "tel:+506911",
    },
];

export default function Contacts() {
    return (
        <>
            {info.map((i) => (
                <a
                    key={i.title}
                    href={i.href}
                    className={clsx(
                        "flex flex-row items-center justify-around relative min-h-60 min-w-[325px] mt-14",
                        {
                            "md:w-2/5": true,
                            "md:mt-24": true,
                        }
                    )}
                >
                    <div
                        className="absolute inset-0 bg-cover rounded-lg overflow-hidden"
                        style={{
                            backgroundImage: `url(${i.bg_image})`,
                            opacity: 0.4,
                        }}
                    />

                    <div className="flex flex-row justify-start items-center h-full w-full z-10 mx-5">
                        <div className="hidden md:block">
                            <Image
                                src={i.icon}
                                width={100}
                                height={100}
                                alt={"Screen"}
                            />
                        </div>
                        <div className="mx-5">
                            <p className={subtitle({ class: "font-bold" })}>
                                {i.title}
                            </p>
                            <p className={subtitle()}>{i.number}</p>
                        </div>
                    </div>
                </a>
            ))}
        </>
    );
}
