import "./CardSection.css"
import CardGreenSect from "../../Assets/Cards/CardGreenSect.png"
import CardGoldSect from "../../Assets/Cards/CardGoldSect.png"
import CardGraySect from "../../Assets/Cards/CardGraySect.png"
import Btn_Green from "../Buttons/Btn_Green";
import Btn_White from "../Buttons/Btn_White";

const CardSection = (props) => {
  return (
    <div className={"CardSectionContainer"}>
      <h1 className={"SecondTittle "}>Account</h1>
      <h1 className={"CardSectionTittle"}>Perfect Card <p>for your needs</p></h1>
      <h1 className={"CardSectionDescript"}>Senectus et netus et malesuada fames ac turpis. <p>Sagittis vitae et leo duis ut diam</p></h1>
      <div className={"CardSectionCards"}>
        <img src={CardGreenSect} alt={"CardGreenSect"} className={"CardGreenSect"}/>
        <img src={CardGraySect} alt={"CardGreenSect"} className={"CardGraySect"}/>
        <img src={CardGoldSect} alt={"CardGreenSect"} className={"CardGoldSect"}/>
      </div>
      <div className={"BtnSection"}>
        <Btn_Green classNameBtn={"Button_Green"} BtnText={"Open Account"}/>
        <Btn_White classNameBtn={"Button_White"} BtnText={"Compare Cards"}/>
      </div>
    </div>
  )
}
export default CardSection;