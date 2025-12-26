import { RoundedShape } from "../share/rounded-shape";
import Image from "next/image";

import { ButtonCustom } from "../share/button-custom";
import Link from "next/link";

export const About = () => {
  return (
    <section className="flex">
      <div className="flex flex-col flex-1 py-8 gap-4">
        <div>
          <h2 className="uppercase text-4xl text-eighth font-bebas-neue tracking-tighter">
            Acerca de
          </h2>
        </div>
        <div className="flex flex-col gap-6 items-center justify-center flex-1 max-w-119">
          <h2 className="text-third text-7xl  text-center font-bold">
             ¿Qué es la AVGM? 
          </h2>
          <p className="text-center font-semibold text-[22px] text-secondary-custom">
            Es un mecanismo de emergencia para garantizar la seguridad de
            mujeres y niñas, cesar la violencia y eliminar desigualdades
            estructurales mediante acciones gubernamentales coordinadas en un
            territorio específico
          </p>

          <ButtonCustom asChild>
            <Link href="/about-municipios">
              <span className="uppercase font-bebas-neue tracking-tighter text-2xl">
                ver municipios vgm
              </span>
            </Link>
          </ButtonCustom>
        </div>
      </div>
      <RoundedShape
        color="fifth"
        className="items-center flex-row text-center gap-0 p-0 flex-1"
      >
        <picture className="relative flex-1 min-h-150  w-full overflow-hidden">
          <Image
            src="/images/about.png"
            alt="About Image"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute rotate-y-180 object-contain object-bottom scale-110 top-44! -left-25!"
          />
        </picture>
      </RoundedShape>
    </section>
  );
};
