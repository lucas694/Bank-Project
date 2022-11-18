import "./Transactions.css"
import { FaCheckCircle } from "react-icons/fa";
import Li from "../Li";
import AppleIconTrans from "../../Assets/Cards/AppeIcon.png"


const Transactions = () => {
  const transactionsList = [
    {TransIcon:AppleIconTrans, Tittle:"Apple", Description:"Macbook", Price:"-999$"},
    {TransIcon:AppleIconTrans, Tittle:"Amazon", Description:"Electronics", Price:"-49$"},
    {TransIcon:AppleIconTrans, Tittle:"Twitter", Description:"Ads", Price:"-29$"},
    {TransIcon:AppleIconTrans, Tittle:"Microsoft", Description:"Office Suite", Price:"-149$"},
    {TransIcon:AppleIconTrans, Tittle:"Dropbox", Description:"Cloud", Price:"-14$"},
    {TransIcon:AppleIconTrans, Tittle:"Paypal", Description:"Shopping", Price:"-200$"},
  ]
  return(
    <div className={"TransactionsContainer"}>
      <div className={"TransactionsLeft"}>
        <h1 className={"TransactionsTittle"}>Send & receive money instantly</h1>
        <h1 className={"TransactionsDescription"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</h1>
        <div>
          <ul className={"UlTrans"}>
            <Li LiClass={"LiComp"} LiIcon={<FaCheckCircle className={"IconCheckGreen"}/>} Text={"Malesuada Ipsum"} className={"LiTrans"}/>
            <Li LiClass={"LiComp"} LiIcon={<FaCheckCircle className={"IconCheckGreen"}/>} Text={"Vestibulum"} className={"LiTrans"}/>
            <Li LiClass={"LiComp"} LiIcon={<FaCheckCircle className={"IconCheckGreen"}/>} Text={"Parturient Lorem"} className={"LiTrans"}/>
          </ul>
        </div>
      </div>
      <div className={"TransactionsRight"}>
        <div className={"TransCardContainer"}>
          {transactionsList.map((item) => (
            <div className={"TransCard"}>
              <img src={item.TransIcon} alt={"TransIcon"} className={"TransIcon"}/>
              <span className={"TextCardSection"}>
                <h1 className={"TransCardTittle"}>{item.Tittle}</h1>
                <h1 className={"TransCardDescription"}>{item.Description}</h1>
              </span>
              <h1 className={"TransCardTittle"}>{item.Price}</h1>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
export default Transactions