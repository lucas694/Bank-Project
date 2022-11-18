import "./AppSection.css"
import Li from "../Li";
import {FaCheckCircle} from "react-icons/fa";
import AppleStore from "../../Assets/Cards/AppleStore.svg";
import GoogleStore from "../../Assets/Cards/GoogleStore.svg";
import MobileApp from "../../Assets/Cards/app.svg";

const AppSection = () => {
  return(
    <div className={"AppSectionContainer"}>
      <div className={"AppSectionLeft"}>
        <div>
          <h1 className={"AppSectionTittle"}>One App.</h1>
          <h1 className={"AppSectionTittle"}>One banking.</h1>
          <h1 className={"AppSectionDescript"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</h1>
        </div>
        <div className={"CheckSection"}>
          <Li LiClass={"LiCompTextWhite"} LiIcon={<FaCheckCircle className={"IconCheckGreen bg"}/>} Text={"Instant transactions"} />
          <Li LiClass={"LiCompTextWhite"} LiIcon={<FaCheckCircle className={"IconCheckGreen"}/>} Text={"Saving accounts"}/>
          <Li LiClass={"LiCompTextWhite"} LiIcon={<FaCheckCircle className={"IconCheckGreen"}/>} Text={"Payments worldwide"}/>
          <Li LiClass={"LiCompTextWhite"} LiIcon={<FaCheckCircle className={"IconCheckGreen"}/>} Text={"100% mobile banking"}/>
        </div>
        <div className={"LinkSection"}>
          <a href={"https://www.apple.com/br/store"} target={"_blank"}><img src={AppleStore} className={"AppIconSect"}/></a>
          <a href={"https://play.google.com"} target={"_blank"}><img src={GoogleStore} className={"AppIconSect"}/></a>
        </div>
      </div>
      <div className={"AppSectionRight"}>
        <img src={MobileApp} className={"MobileApp"}/>
      </div>

    </div>
  )
} ;export default AppSection;