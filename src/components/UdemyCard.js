import star from "../assets/images/star_full.png"
import starhalf from "../assets/images/star_half.png"

const UdemyCard = (props) => {
  return (
    <div>
      <div>
        <div id="box1">
            <img src={props.image} alt="" />
            <p class="imagetitle">{props.imagetitle}</p>
            <p class="greytext1">{props.nameofauthor}</p>
            <div class="ratings">
                <p id="gold">{props.rating}</p>
                <img src={star} alt="" width="15" height="15"/>
                <img src={star} alt="" width="15" height="15"/>
                <img src={star} alt="" width="15" height="15"/>
                <img src={star} alt="" width="15" height="15"/>
                <img src={starhalf} alt="" width="15" height="15"/>
                <p class="greytext" id="paddingleft">{props.viewamount}</p>
            </div>
            <div class="pricing">
                <p>£{props.priceof}</p>
                <p id="strikethrough" class="greytext">£{props.oldprice}</p>
            </div>
            <div class="bestseller">
                <p id="bestsellertext">Bestseller</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UdemyCard;
