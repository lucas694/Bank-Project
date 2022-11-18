import "./Features.css"
import BaseComponent from "./BaseComponent";
import TransictionApp from "../../Assets/BaseComponent/TransictionApp.png"
import StatsApp from "../../Assets/BaseComponent/StatsApp.png"
import SavingApp from "../../Assets/BaseComponent/SavingApp.png"
import CardsApp from "../../Assets/BaseComponent/CardsApp.png"
import AppSection from "../FrontPage/AppSection";
import FeaturesHero from "./FeaturesHero";
import AccountFeatures from "./AccountFeatures";

const Features = () => {
  return(
    <div className={"FeaturesContainer"}>
      <FeaturesHero/>
      <BaseComponent SecondTittle={"Transactions"}
                     Tittle={"Send & receive money instantly"}
                     Description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                     Img={TransictionApp}/>

      <BaseComponent SecondTittle={"Cards"}
                     Tittle={"Manage your cards"}
                     Description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                     Img={CardsApp}/>

      <BaseComponent SecondTittle={"Advanced Statistics"}
                     Tittle={"Keep control over your money"}
                     Description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                     Img={StatsApp}/>

      <BaseComponent SecondTittle={"Saving Accounts"}
                     Tittle={"Lorem et ipsum dolor"}
                     Description={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}
                     Img={SavingApp}/>

      <AccountFeatures/>
      <AppSection/>

    </div>
  )
};
export default Features;