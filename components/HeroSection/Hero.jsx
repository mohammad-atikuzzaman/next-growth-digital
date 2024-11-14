import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroMarque from "./HeroMarque";

import "./styles.css"

const Hero = () => {
  return (
    <section className="grad py-24">
      <article className="container mx-auto flex items-center justify-between">
        <HeroText />
        <HeroImage />
      </article>
      <HeroMarque />
    </section>
  );
};

export default Hero;
