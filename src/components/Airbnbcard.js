import blackstar from "../assets/images/star_black.png"

const Airbnbcard = (props) => {
    return(
    <div>
      <div>
        <div id="box2">
            <img id="roundedborder" src={props.image} alt="" />
            <div class="ratings1">
                <p class="imagetitle">{props.imagetitle}</p>
                <img id="starblack" src={blackstar} alt="" width="15" height="15"/>
                <p id="black">{props.rating}</p>
            </div>
            <div class="pricing">
            <p class="greytext">{props.description}</p>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Airbnbcard