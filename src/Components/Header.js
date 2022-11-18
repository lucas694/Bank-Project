import "./Header.css"
import Btn_Green from "./Buttons/Btn_Green";
import Btn_White from "./Buttons/Btn_White";
import {Link} from "react-router-dom";

const Header = () =>{
    return (
        <div className={"HeaderContainer"}>
          <div className={"HeaderContent"}>
            <h1 className={"HeaderBanquee"}>banquee.</h1>

            <ul className={"UlHeader"}>
              <li className={"LiHeader"}><Link to={"/"}>Home</Link></li>
              <li className={"LiHeader"}><Link to={"/Features"}>Features</Link></li>
              <li className={"LiHeader"}>Compare</li>
              <li className={"LiHeader"}>Blog</li>
            </ul>

            <div className={"DivBtn"}>
              <Btn_White classNameBtn={"Button_Green"} BtnText={"Login"}/>
              <Btn_Green classNameBtn={"Button_White"} BtnText={"Open Account"}/>
            </div>
          </div>
        </div>
    )
}
export default Header