import "./Organize.css"
import Bike from "../Assets/Cards/OrganizeImgs/Bike.png"
import AirPlane from "../Assets/Cards/OrganizeImgs/Airplane.png"
import Camera from "../Assets/Cards/OrganizeImgs/Camera.png"
import Laptop from "../Assets/Cards/OrganizeImgs/Laptop.png"

const Organize = () =>{
  const OrganizeData = [
    {Img:Laptop, Tittle:"New Laptop", Price:"400$",CardImg:"flex justify-center bg-gray-200 rounded-2xl h-[15em] items-center "},
    {Img:Bike, Tittle:"Dream Bike", Price:"200$", CardImg:"flex justify-center bg-red-100 rounded-2xl h-[15em] items-center "},
    {Img:Camera, Tittle:"Camera", Price:"100$",CardImg:"flex justify-center bg-blue-100 rounded-2xl h-[15em] items-center "},
    {Img:AirPlane, Tittle:"Holyday", Price:"14000$",CardImg:"flex justify-center bg-violet-200 b rounded-2xl h-[15em] items-center "},
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
              <div className={item.CardImg}>
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