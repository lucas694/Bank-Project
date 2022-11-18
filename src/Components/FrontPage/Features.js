import "./Features.css"
import FeaturesApp from "../../Assets/Cards/Features/appFeatures.svg"
import SavingAcc from "../../Assets/Cards/Features/SavingAccounts.png"
import InstantTrans from "../../Assets/Cards/Features/IntantTransictions.png"
import VirtualCards from "../../Assets/Cards/Features/VirtualCards.png"
import MobileBank from "../../Assets/Cards/Features/MobileBank.png"
import Contactless from "../../Assets/Cards/Features/Contactless.png"
import AdvancedStats from "../../Assets/Cards/Features/AdvancedStatics.png"


const Features = () =>{
  const FeaturesValues = [
    {id:1 ,tittle:"Instant transitions", description:"Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.", img: AdvancedStats,},
    {id:2 ,tittle:"Saving accounts", description:"Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.", img:SavingAcc},
    {id:3 ,tittle:"Mobile banking", description:"Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.", img:MobileBank},
    {id:4 ,tittle:"Advanced statistics", description:"Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.", img:AdvancedStats},
    {id:5 ,tittle:"Virtual cards", description:"Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.", img:VirtualCards},
    {id:6 ,tittle:"Contactless payments", description:"Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis.", img:Contactless},
  ]
  return(

    <div className={"FeaturesSectionContainer"}>
      <div className={"FeaturesLeft"}>
        <h1 className={"FeaturesTittle"}>One App.</h1>
        <h1 className={"FeaturesTittle"}>One banking.</h1>
        <div className={"FeaturesCardContainer"}>
          {FeaturesValues.map((item) => (
            <div className={"FeaturesCard"}>
              <img src={item.img} alt={item.tittle} className={"FeaturesIcon"}/>
              <h1 className={"FeaturesCardTittle"}>{item.tittle}</h1>
              <p className={"FeaturesCardDescription"}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={"FeaturesRight"}>
        <img src={FeaturesApp} alt={"FeaturesAPP"} className={"AppFeaturesImg"}/>
      </div>
    </div>
  )
};
export default Features;