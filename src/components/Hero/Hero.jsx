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

        <p className="punjabi-text">
            ਰੋਜ ਨਵੀਆਂ ਸਰਕਾਰੀ ਜਾਣਕਾਰੀਆਂ ਲੈਣ ਲਈ ਵਟਸਪ ਗਰੁੱਪ ਜੁਆਇਨ ਕਰੋ
        </p>

        <div className="hero-buttons">

        {/* WhatsApp Group */}
        <a 
            href="https://whatsapp.com/channel/0029Vb5TNAt2Jl88FZShjE2e"
            target="_blank"
            rel="noopener noreferrer"
        >
            <button className="hero-btn whatsapp">
            Join WhatsApp Group
            </button>
        </a>

        {/* Call Now */}
        <a href="tel:+918558091100">
            <button className="hero-btn call">
            📞 Call Now
            </button>
        </a>

        {/* Message Now */}
        <a
            href="https://wa.me/918558091100"
            target="_blank"
            rel="noopener noreferrer"
        >
            <button className="hero-btn message">
            💬 Message Now
            </button>
        </a>

        </div>



      </div>

      <div className="hero-right">
        <div className="rotating-gallery">
          <img src="/assets/image1.png" alt="Service 1" className="gallery-image" />
          <img src="/assets/image2.png" alt="Service 2" className="gallery-image" />
          <img src="/assets/image3.png" alt="Service 3" className="gallery-image" />
          <img src="/assets/image4.png" alt="Service 4" className="gallery-image" />
          <img src="/assets/image5.png" alt="Service 5" className="gallery-image" />
          <img src="/assets/image6.png" alt="Service 6" className="gallery-image" />
          <img src="/assets/image7.png" alt="Service 7" className="gallery-image" />
          <img src="/assets/image8.png" alt="Service 8" className="gallery-image" />
          <img src="/assets/image9.png" alt="Service 9" className="gallery-image" />
          <img src="/assets/image10.png" alt="Service 10" className="gallery-image" />
          <img src="/assets/image11.png" alt="Service 10" className="gallery-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
