import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Your Trusted Neighbourhood Kiosk
          <br />
          <span>for All Digital Services</span>
        </h1>

        <p>
          Common Services Centres are the access points for delivery of
          Government-to-Citizen (G2C) and Business-to-Citizen (B2C) services.
        </p>

        <button className="hero-btn">Join our whatsapp Group</button>
      </div>

      <div className="hero-right">
        <img src="/assets/bg-tree.png" alt="CSC Tree" />
      </div>
    </section>
  );
};

export default Hero;
