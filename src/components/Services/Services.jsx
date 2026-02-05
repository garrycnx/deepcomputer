import "./Services.css";

import aadhaar from "../../assets/services/aadhaar.png";
import gnm from "../../assets/services/number_plate.png";
import passport from "../../assets/services/passport.png";
import driving from "../../assets/services/Driving.png";
import rc from "../../assets/services/rc.png";
import itr from "../../assets/services/itr.png";
import badc from "../../assets/services/badc.png";
import rsc from "../../assets/services/rsc.png";
import caste from "../../assets/services/caste.png";
import lic from "../../assets/services/lic.png";
import oldage from "../../assets/services/oldage.png";
import website from "../../assets/services/website.png";
import health from "../../assets/services/health.png";
import cctv from "../../assets/services/cctv.png";
import mmsyf from "../../assets/services/mmsyf.png";
import mmsyb from "../../assets/services/mmsyb.png";
import po from "../../assets/services/po.png";

const services = [
  { name: "Aadhaar Card",punjabi: "ਆਧਾਰ ਕਾਰਡ", img: aadhaar },
  { name: "Government Number Plate",punjabi: "ਸਰਕਾਰੀ ਨੰਬਰ ਪਲੇਟ", img: gnm },
  { name: "passport",punjabi: "ਪਾਸਪੋਰਟ", img: passport },
  { name: "Driving License",punjabi: "ਡਰਾਈਵਿੰਗ ਲਾਇਸੰਸ", img: driving },
  { name: "Car/Bike RC Renew",punjabi: "ਕਾਰ/ਬਾਈਕ ਆਰਸੀ ਰੀਨਿਊ", img: rc },  
  { name: "Income Tax Return",punjabi: "ਇਨਕਮ ਟੈਕਸ ਰਿਟਰਨ", img: itr },  
  { name: "Birth/Death certificate",punjabi: "ਜਨਮ/ਮੌਤ ਸਰਟੀਫਿਕੇਟ", img: badc },   
  { name: "Resident Certificate",punjabi: "ਨਿਵਾਸੀ ਸਰਟੀਫਿਕੇਟ", img: rsc },  
  { name: "Caste Certificate",punjabi: "ਜਾਤੀ ਸਰਟੀਫਿਕੇਟ", img: caste }, 
  { name: "Low Income Certificate",punjabi: "ਘੱਟ ਆਮਦਨੀ ਦਾ ਸਰਟੀਫਿਕੇਟ", img: lic },
  { name: "Old Age Pension",punjabi: "ਬੁਢਾਪਾ ਪੈਨਸ਼ਨ", img: oldage },
  { name: "Website Development",punjabi: "ਆਪਣੀ ਕਾਰੋਬਾਰੀ ਵੈੱਬਸਾਈਟ ਬਣਵਾਓ", img: website },
  { name: "Health Insurance",punjabi: "ਸਿਹਤ ਬੀਮਾ", img: health },
  { name: "CCTV Installation",punjabi: "CCTV ਕੈਮਰੇ ਲਗਵਾਓ", img: cctv },

  
  
];

const Services = () => {

    const scrollingText =
      "ਇੱਥੇ 10 ਲੱਖ ਵਾਲੇ ਮੁੱਖ ਮੰਤਰੀ ਆਯੁਸ਼ਮਾਨ ਕਾਰਡ ਵੀ ਬਣਾਏ ਜਾਂਦੇ ਹਨ।";

    const englishText =
      "Chief Minister Ayushman Cards worth Rs 10 lakh are also made here.";

    return (
      <section className="services-section">

        <div className="scrolling-text-container">
          <div className="scrolling-track">
            <span>{scrollingText}</span>
            <span>{englishText}</span>
          </div>
        </div>

            {/* Add the two images here */}
      <div className="mmsy-images-container">
        <img src={mmsyf} alt="Mukhya Mantri Sehat Yojana Punjabi" className="mmsy-image" />
        <img src={mmsyb} alt="Mukhya Mantri Sehat Yojana Details" className="mmsy-image" />
      </div>

      <div className="po-images-container">
        <img src={po} alt="Post office " className="po-image" />

      </div>



      <h2 className="services-title">
        Our <span>Services</span>
      </h2>

      <div className="services-tabs">
        <button className="active">Government to Citizen Services (G2C)</button>
        <button>Business to Citizen Services (B2C)</button>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
                <div className="image-box">
                    <img src={item.img} alt={item.name} />
                </div>

                <p className="service-name">{item.name}</p>

                {item.punjabi && (
                    <p className="service-punjabi">{item.punjabi}</p>
                )}
                </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
