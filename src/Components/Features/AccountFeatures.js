import "./AccountFeatures.css"
import FeatureCards from "./FeatureCards";
import CardGreenSect from "../../Assets/Cards/CardGreenSect.png"
import CardGoldSect from "../../Assets/Cards/CardGoldSect.png"
import CardGraySect from "../../Assets/Cards/CardGraySect.png"

const AccountFeatures = () =>{
  const CardsType =[
    {id:1,CardName:"CardGreen" ,CardImg:CardGreenSect, CardType:"Basic", CardDescript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", CardPrice:"Free",},
    {id:2,CardName:"CardGray" ,CardImg:CardGraySect, CardType:"Premium", CardDescript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", CardPrice:"$5",},
    {id:3,CardName:"CardGold" ,CardImg:CardGoldSect, CardType:"Gold", CardDescript:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.", CardPrice:"$10",},
  ]
  return(
    <div className={"AccountFeaturesContainer"}>
      <div className={"AccountFeaturesTop"}>
        <h1 className={"AccountFeaturesSecondTittle"}>Account</h1>
        <h1 className={"AccountFeaturesTittle"}>Choose your card.</h1>
        <p className={"AccountFeaturesDescript"}>Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo duis ut diam.</p>
      </div>
      <div className={"AccountFeaturesBottom"}>
        {CardsType.map((item) => {
          return(
            <FeatureCards key={item.id}
                          CardName={item.CardName}
                          CardImg={item.CardImg}
                          CardType={item.CardType}
                          CardDescript={item.CardDescript}
                          CardPrice={item.CardPrice}/>
          )
        })}
      </div>
    </div>
  )
};
export default AccountFeatures