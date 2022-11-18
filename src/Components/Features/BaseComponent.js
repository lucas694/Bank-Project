import "./BaseComponent.css"
import Li from "../Li";
import {FaCheckCircle} from "react-icons/fa";


const BaseComponent = (props) =>{
  return(
    <div className={"BaseComponentContainer"}>
      <div className={"BaseComponentLeft"}>
        <div>
          <h1 className={"BaseCompSecondTittle"}> {props.SecondTittle} </h1>
          <h1 className={"BaseCompTittle"}> {props.Tittle} </h1>
          <h1 className={"BaseCompDescript"}>{props.Description}</h1>
        </div>
        <div className={""}>
          <ul className={"UlBaseComp"}>
            <Li LiClass={"LiComp"} LiIcon={<FaCheckCircle className={"IconCheckWhite"}/>} Text={"Malesuada Ipsum"} />
            <Li LiClass={"LiComp"} LiIcon={<FaCheckCircle className={"IconCheckWhite"}/>} Text={"Vestibulum"} />
            <Li LiClass={"LiComp"} LiIcon={<FaCheckCircle className={"IconCheckWhite"}/>} Text={"Parturient Lorem"} />
          </ul>
        </div>
      </div>


      <div className={"BaseComponentRight"}>
        <img src={props.Img} className={"BaseComponentImg"}/>
      </div>
    </div>
  )
};
export default BaseComponent;