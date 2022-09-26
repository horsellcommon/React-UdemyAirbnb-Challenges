import Airbnbcard from "./Airbnbcard";
import image1 from "../assets/images/abnb_img1.png";
import image2 from "../assets/images/abnb_img2.png";
import image3 from "../assets/images/abnb_img3.png";
import image4 from "../assets/images/abnb_img4.png";

const Airbnb = () => {
  return (
    <div>
        <h1>Just Booked in United Kingdom</h1>
        <div class="container1">
            <Airbnbcard image={image1} imagetitle="Island • Badachro" rating={4.72} description="Nature Observatory on Secluded Island" />
            <Airbnbcard image={image2} imagetitle="Loft • Edinburgh" rating={4.99} description="Classical Apartment on the Royal Mile" />
            <Airbnbcard image={image3} imagetitle="Tiny Home • Drinin" rating={4.95} description="Unique and Secluded Airship with..." />
            <Airbnbcard image={image4} imagetitle="Hut • Sutton" rating={4.92} description="Unique glamping experience near Ely &..." />
        </div>
    </div>
  );
};

export default Airbnb;
