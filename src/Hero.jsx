import React from "react";
import heroImg from "./assets/hero.svg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            nostrum quas quos iure architecto officia mollitia deleniti alias
            magnam consequuntur dolorum porro ab laboriosam quibusdam dolores,
            atque, dolor ducimus ipsum?
          </p>
        </div>
        <div className="img-container">
          <img className="image" src={heroImg} alt="Woman and browser" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
