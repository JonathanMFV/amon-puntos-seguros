/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";

import React, { useState } from "react";
import MapPoints from "@/components/Map-Points";

export default function Page() {
  const [selectedPlace, setSelectedPlace] = useState({
    id: "1",
    name: "Parque Zoológico y Jardín Botánico Nacional Simón Bolívar",
    lat: 9.938649401136207,
    long: -84.07328430635145,
    images: [
      "/customers/simon-bolivar-1.jpg",
      "/customers/simon-bolivar-2.jpg",
    ],
    characteristics: [
      "Lugar amplio.",
      "Prevención de caída de infraestructura.",
      "Alberga cantidad masiva de personas en caso de emergencia.",
      "Solo un acceso.",
    ],
  });

  const onChangeSelectedMarker = (value: any) => {
    setSelectedPlace(value);
  };
  return (
    <div className="flex">
      <section className="flex flex-col gap-4 py-8 md:py-10 mt-24 mx-4 sm:mx-12 md:mx-20 lg:mx-32">
        {/* Section info */}
        <div className="flex flex-row items-center">
          <div className="flex flex-col sm:items-start items-center lg:mr-14">
            <div className="flex flex-col">
              <h1
                className={title({
                  class: "sm:text-start text-center",
                })}
              >
                Descubra los Puntos
              </h1>
              <h1
                className={title({
                  class: "sm:text-start text-center",
                })}
              >
                Seguros de Barrio Amón
              </h1>
            </div>
            <div className="flex">
              <p
                className={subtitle({
                  class: "sm:text-start text-center mt-5",
                })}
              >
                Identificar los puntos de encuentro es importante en una posible
                evacuación,así se crean rutas de emergencia ante cualquier
                eventualidad.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <Image
              src="/customers/RadarGreenLogo.png"
              width={225}
              height={100}
              className="hidden md:block"
              alt={"Screen"}
            />
          </div>
        </div>

        {/* Section Map */}

        <div className="flex flex-col justify-center items-start mt-20">
          <div className="">
            <div className="">
              <h1 className={title({ size: "sm" })}>
                Seleccione el lugar a descubrir
              </h1>
            </div>
          </div>
          <MapPoints changeSelectedMarker={onChangeSelectedMarker} />
        </div>

        {/* Section Info */}
        {selectedPlace && (
          <div className="flex flex-col justify-between">
            <div className="flex flex-col md:flex-row gap-5 mt-5 md:gap-0">
              {/* Titulo */}
              <div className="md:w-1/3 mr-20">
                <p
                  className={title({
                    size: "sm",
                  })}
                >
                  {selectedPlace.name}
                </p>
              </div>
              <div className="flex flex-col md:w-2/3">
                {/* Caracteristicas */}
                <div className="flex flex-col">
                  <div>
                    <p
                      className={title({
                        size: "sm",
                      })}
                    >
                      Caracteristicas
                    </p>
                  </div>
                  <div className="mt-5">
                    <ul>
                      {selectedPlace.characteristics.map(
                        (characteristic, index) => (
                          <li
                            key={index}
                            className="list-disc list-inside text-[11px] md:text-base"
                          >
                            {characteristic}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
                {/* Fotografias */}
                <div className="flex flex-col mt-10">
                  <p
                    className={title({
                      size: "sm",
                    })}
                  >
                    Fotografias
                  </p>
                  <div className="mt-5">
                    <div className="carousel carousel-end rounded-lg">
                      {selectedPlace.images.map((image, index) => (
                        <div key={index} className="carousel-item">
                          <Image
                            src={image}
                            width={300}
                            height={400}
                            className="hidden md:block"
                            alt={"Screen"}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
