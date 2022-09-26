import UdemyCard from "./UdemyCard";
import image1 from "../assets/images/udemy_img1.png"
import image2 from "../assets/images/udemy_img2.png"
import image3 from "../assets/images/udemy_img3.png"

const Udemy = () => {
  return (
    <div>
        <h1>Students are viewing</h1>
        <div class="container">
            <UdemyCard image={image1} imagetitle="The Complete 2022 Web Development Bootcamp" nameofauthor="Dr. Angela Yu" rating="4.7" viewamount="(224,949)" priceof={19.99} oldprice={69.99}/>
            <UdemyCard image={image2} imagetitle="100 Days of Code: The Complete Python Pro Bootcamp for 2022" nameofauthor="Dr. Angela Yu" rating="4.7" viewamount="(139,610)" priceof={17.99} oldprice={59.99}/>
            <UdemyCard image={image3} imagetitle="Ultimate AWS Certified Solutions Architect Associate..." nameofauthor="Stephane Maarek | AWS Certified Cloud Pra..." rating="4.7" viewamount="(145,685)" priceof={17.99} oldprice={59.99}/>
        </div>
    </div>
  );
};

export default Udemy;
