import "./Hero.css"
import Btn_Green from "./Buttons/Btn_Green";
import Btn_White from "./Buttons/Btn_White";
import Li from "./Li";
import { FaCheckCircle } from "react-icons/fa";
import Card1 from "../Assets/Cards/card_1.svg";
import Card2 from "../Assets/Cards/card_2.png";

const Hero = ()=>{
  return (
    <div className={"HeroContainer"}>
      <div className={"HeroLeft"}>
        <h1 className={"HeroTitle"}>Banking <p>starts here.</p></h1>
        <h1 className={"HeroDescript"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <p> sed do eiusmod tempor incididunt ut labore.</p>
        </h1>
        <ul className={"UlHero"}>
          <Li LiIcon={<FaCheckCircle className={"IconCheckWhite"}/>} Text={"Instant Transfer"}/>
          <Li LiIcon={<FaCheckCircle className={"IconCheckWhite"}/>} Text={"Saving Accounts"}/>
          <Li LiIcon={<FaCheckCircle className={"IconCheckWhite"}/>} Text={"Payments woldwide"}/>
          <Li LiIcon={<FaCheckCircle className={"IconCheckWhite"}/>} Text={"100% mobile banking"}/>
        </ul>
        <div className={"BtnDiv"}>
          <Btn_Green BtnText={"Open Account"}/>
          <Btn_White BtnText={"Compare Cards"}/>
        </div>
      </div>

      <div className={"HeroRight"}>
        <img src={Card1} alt={"Card1"} className={"Card1"}/>
        <img src={Card2} alt={"Card2"} className={"Card2"}/>
      </div>
  </div>
  )
}
export default Hero