import "./FeaturesCards.css"
import Btn_Green from "../Buttons/Btn_Green";

const FeatureCards = (props) => {
  return(
      <div className={"FeatureCardsContainer"}>
        <div className={"FeatureCardsTop"}>
          <h1 className={"FeatureCardsType"}>{props.CardType}</h1>
          <p className={"FeatureCardsPrice"}>{props.CardPrice}</p>
          <p className={"FeatureCardDescript"}>{props.CardDescript}</p>
        </div>
        <div className={"FeatureCardImg"}>
          <img src={props.CardImg} alt={props.CardName} className={""}/>
        </div>

        <div className={"FeatureCardsBottom"}>
          <Btn_Green classNameBtn={"Button_GreenFull"} BtnText={"Get started"}/>
        </div>
    </div>
  )
};
export default FeatureCards;