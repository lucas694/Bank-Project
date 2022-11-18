import "./Notifications.css"
import Li from "../Li";
import {FaCheckCircle} from "react-icons/fa";
import BankoIcon from "../../Assets/Cards/BankoIcon.png";

const Notifications = () =>{
  const NotificationBanko = [
    {TransIcon:BankoIcon, Tittle:"Banko", Description:"You payment of 49$ been processed!",},
    {TransIcon:BankoIcon, Tittle:"Banko", Description:"You got a new support message!",},
    {TransIcon:BankoIcon, Tittle:"Banko", Description:"You payment was declined!",},
    {TransIcon:BankoIcon, Tittle:"Banko", Description:"Please verify your payment of 99$!",},
    {TransIcon:BankoIcon, Tittle:"Banko", Description:"New account statistics are avaliable!",}
  ]
  return(
    <div className={"NotificationsContainer"}>
        <div className={"NotifiLeft"}>
          <h1 className={"NotifiTittle"}>Stay Notified</h1>
          <h1 className={"NotifiDescription"}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h1>
          <div>
            <ul className={"UlNotifi"}>
              <Li LiClass={"LiComp"} LiIcon={<FaCheckCircle className={"IconCheckWhite"}/>} Text={"Malesuada Ipsum"} className={"LiTrans"}/>
              <Li LiClass={"LiComp"} LiIcon={<FaCheckCircle className={"IconCheckWhite"}/>} Text={"Vestibulum"} className={"LiTrans"}/>
              <Li LiClass={"LiComp"} LiIcon={<FaCheckCircle className={"IconCheckWhite"}/>} Text={"Parturient Lorem"} className={"LiTrans"}/>
            </ul>
          </div>
        </div>
      <div className={"NotifiRight"}>
        <div className={"NotifiCardContainer"}>
          {NotificationBanko.map((item) => (
            <div className={"NotifiCard"}>
              <img src={item.TransIcon} alt={"NotifiIcon"} className={"NotifiIcon"}/>
              <span className={"TextCardSec"}>
                <h1 className={"NotifiCardTittle"}>{item.Tittle}</h1>
                <h1 className={"NotifiCardDescription"}>{item.Description}</h1>
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
export default Notifications