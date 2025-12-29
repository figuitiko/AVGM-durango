import React from "react";
import { RoundedShape } from "../share/rounded-shape";
import Image from "next/image";
import { LinkButtonCustom } from "../share/button-custom";

/* cspell:disable */

export const Hero = () => {
  return (
    <section>
      <RoundedShape
        color="secondary"
        className="items-center md:flex-row  text-center gap-0 "
      >
        <picture className="hidden md:block relative flex-1 min-h-150 w-full overflow-visible">
          <Image
            src="/images/hero-woman.png"
            alt="Main hero image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-bottom scale-110"
            priority
          />
        </picture>

        <div className="relative flex items-center flex-1 mx-auto w-full min-h-150">
          <picture>
            <Image
              src="/images/map-empty.png"
              alt="Hero background"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain opacity-5"
            />
          </picture>

          <div className="max-w-2xl flex flex-col z-10">
            <h2 className="text-white text-3xl  md:text-5xl font-bold  leading-tight max-w-2xl">
              Derecho a vivir seguras siempre
            </h2>
            <h4 className="text-3xl text-white opacity-80">
              Alerta de Violencia de Género contra las Mujeres
            </h4>
            <div className="mt-4">
              <LinkButtonCustom
                text="Más Información"
                href="/#about"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </RoundedShape>
    </section>
  );
};
