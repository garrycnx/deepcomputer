import "./Services.css";

import aadhaar from "../../assets/services/aadhaar.png";
import gnm from "../../assets/services/number_plate.png";
import passport from "../../assets/services/passport.png";
import driving from "../../assets/services/Driving.png";
import rc from "../../assets/services/rc.png";
import itr from "../../assets/services/itr.png";
import badc from "../../assets/services/badc.png";

const services = [
  { name: "Aadhaar Card",punjabi: "ਆਧਾਰ ਕਾਰਡ", img: aadhaar },
  { name: "Government Number Plate",punjabi: "ਸਰਕਾਰੀ ਨੰਬਰ ਪਲੇਟ", img: gnm },
  { name: "passport",punjabi: "ਪਾਸਪੋਰਟ", img: passport },
  { name: "Driving License",punjabi: "ਡਰਾਈਵਿੰਗ ਲਾਇਸੰਸ", img: driving },
  { name: "Car/Bike RC Renew",punjabi: "ਕਾਰ/ਬਾਈਕ ਆਰਸੀ ਰੀਨਿਊ", img: rc },  
  { name: "Income Tax Return",punjabi: "ਇਨਕਮ ਟੈਕਸ ਰਿਟਰਨ", img: itr },  
  { name: "Birth/Death certificate",punjabi: "ਜਨਮ/ਮੌਤ ਸਰਟੀਫਿਕੇਟ", img: badc }   
];

const Services = () => {
  return (
    <section className="services-section">
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
