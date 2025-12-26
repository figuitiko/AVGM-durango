import Image from "next/image";
import { RoundedShape } from "../share/rounded-shape";

export const HeroMaps = () => {
  return (
    <section>
      <RoundedShape color="secondary">
        <div className="relative flex items-center justify-center flex-1 mx-auto w-full min-h-96">
          <Image
            src="/images/map-empty.png"
            alt="Hero background"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain opacity-5"
          />

          <div className="pointer-events-none max-w-2xl flex flex-col justify-center items-center w-full">
            <h2 className="text-white text-8xl font-bold  leading-tight max-w-2xl text-center">
              Municipios con <span className="text-fourth">AVGM</span> en
              Durango
            </h2>
          </div>
        </div>
      </RoundedShape>
    </section>
  );
};
