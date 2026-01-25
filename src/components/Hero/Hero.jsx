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

        <a 
            href="https://whatsapp.com/channel/0029Vb5TNAt2Jl88FZShjE2e" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <button className="hero-btn">
                Join our WhatsApp Group
            </button>
        </a>


      </div>

      <div className="hero-right">
        <img src="/assets/bg-tree.png" alt="CSC Tree" />
      </div>
    </section>
  );
};

export default Hero;
