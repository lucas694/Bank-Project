import "./Header.css"
import Btn_Green from "./Buttons/Btn_Green";
import Btn_White from "./Buttons/Btn_White";

const Header = () =>{
    return (
        <div className={"HeaderContainer"}>
          <div className={"HeaderContent"}>
            <h1 className={"HeaderBanquee"}>banquee.</h1>

            <ul className={"UlHeader"}>
              <li className={"LiHeader"}>Features</li>
              <li className={"LiHeader"}>Compare</li>
              <li className={"LiHeader"}>Support</li>
              <li className={"LiHeader"}>Blog</li>
            </ul>

            <div className={"DivBtn"}>
              <Btn_White BtnText={"Login"}/>
              <Btn_Green BtnText={"Open Account"}/>
            </div>
          </div>
        </div>
    )
}
export default Header