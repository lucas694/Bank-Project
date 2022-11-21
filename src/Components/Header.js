import "./Header.css"
import Btn_Green from "./Buttons/Btn_Green";
import Btn_White from "./Buttons/Btn_White";
import {Link} from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";


const Header = () =>{
  const NavMobile =[
    {id:1, name:"Home", icon:<FaHome className={"HeaderMobileNavBtnIcon"}/>, link:"/"},
    {id:2, name:"Features", icon:<FaMoneyCheck className={"HeaderMobileNavBtnIcon"}/>, link:"/Features"},
    {id:3, name:"Compare", icon:<FaDollarSign className={"HeaderMobileNavBtnIcon"}/>, link:"/Compare"},
    {id:4, name:"Blog", icon:<FaNewspaper className={"HeaderMobileNavBtnIcon"}/>, link:"/Blog"},
  ]
    return (
        <div className={"HeaderContainer"}>
          <div className={"HeaderMainNav"}>
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

          <div className={"HeaderMobileNav"}>
            {NavMobile.map((item) => {
              return (
                    <Link to={item.link}>
                      <button className={"HeaderMobileNavBtn"}>
                        {item.icon}
                        <p className={"NavBtnText"}>{item.name}</p>
                      </button>
                    </Link>
              )
            })}
          </div>
        </div>
    )
}
export default Header