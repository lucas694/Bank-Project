import "./FeaturesHero.css"
import Btn_Green from "../Buttons/Btn_Green";
import Btn_White from "../Buttons/Btn_White";
import CardGold from "../../Assets/BaseComponent/CardGold.png"
import CardGold90deg from "../../Assets/BaseComponent/CardGold-90deg.png"
import CardGray from "../../Assets/BaseComponent/CardGray.png"
import CardGreen from "../../Assets/BaseComponent/CardGreen.png"

const FeaturesHero = () => {
  return (
    <div className={"FeaturesHeroContainer"}>
      <div className={"FeaturesHeroTop"}>
        <h1 className={"FeaturesHeroSecondTittle"}>Features</h1>
        <h1 className={"FeaturesHeroTittle"}>All in one card.</h1>
        <p className={"FeaturesHeroDescription"}>Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.</p>

        <div className={"FeaturesHeroBtn"}>
          <Btn_Green classNameBtn={"Button_Green"} BtnText={"Open Account"}/>
          <Btn_White classNameBtn={"Button_White"} BtnText={"Compare Cards"}/>
        </div>
      </div>
        <div className={"FeaturesHeroCardContainer"}>
          <img src={CardGold} alt={"CardGold"} className={"CardGold"}/>
          <img src={CardGray} alt={"CardGray"} className={"CardGray"}/>
          <img src={CardGreen} alt={"CardGreen"} className={"CardGreen"}/>
          <img src={CardGray} alt={"CardGray"} className={"CardGray"}/>
          <img src={CardGold90deg} alt={"CardGold"} className={"CardGold "}/>
        </div>
    </div>
  )
};
export default FeaturesHero;