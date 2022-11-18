import "./Organize.css"
import Bike from "../../Assets/Cards/OrganizeImgs/Bike.png"
import AirPlane from "../../Assets/Cards/OrganizeImgs/Airplane.png"
import Camera from "../../Assets/Cards/OrganizeImgs/Camera.png"
import Laptop from "../../Assets/Cards/OrganizeImgs/Laptop.png"

const Organize = () =>{
  const OrganizeData = [
    {Img:Laptop, Tittle:"New Laptop", Price:"400$",DivImg:"OrganizeDivImg bg-grayDiv "},
    {Img:Bike, Tittle:"Dream Bike", Price:"200$", DivImg:"OrganizeDivImg bg-red-100"},
    {Img:Camera, Tittle:"Camera", Price:"100$",DivImg:"OrganizeDivImg bg-blue-100 "},
    {Img:AirPlane, Tittle:"Holyday", Price:"14000$",DivImg:"OrganizeDivImg bg-violet-200 "},
  ]
  return(
    <div className={"OrganizeContainer"}>
      <div>
        <h1 className={"SecondTittle"}>Saving Accounts</h1>
        <h1 className={"OrganizeTittle"}>Organize your money the right way</h1>
        <h1 className={"OrganizeDescript"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
      </div>
      <div className={"OrganizeCardContainer"}>
        {OrganizeData.map((item, index) => {
          return(
            <div className={"OrganizeCard"} key={index}>
              <div className={item.DivImg}>
                <img src={item.Img} alt={item.Tittle} />
              </div>
              <div className={"OrganizeCardInfs"}>
                <h1 className={"OrganizeCardTittle"}>{item.Tittle}</h1>
                <h1 className={"OrganizeCardPrice"}>{item.Price}</h1>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Organize