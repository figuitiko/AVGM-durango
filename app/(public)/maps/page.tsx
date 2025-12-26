import { HeroMaps } from "@/components/maps/hero-maps";
import { Municipalities } from "@/components/maps/municipalities";
import React from "react";

const page = () => {
  return (
    <>
      <HeroMaps />;
      <Municipalities />;
    </>
  );
};

export default page;
