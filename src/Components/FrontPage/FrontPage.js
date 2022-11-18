import "./FrontPage.css"
import Header from "../Header";
import Hero from "./Hero";
import Features from "./Features";
import Transactions from "./Transactions";
import Organize from "./Organize";
import Notifications from "./Notifications";
import CardSection from "./CardSection";
import AppSection from "./AppSection";
import Footer from "../Footer/Footer";
//Components FrontPage
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const FrontPage = () => {
  return(
    <div className={"FrontPageContainer"}>
      <Hero/>
      <Features/>
      <Transactions/>
      <Organize/>
      <Notifications/>
      <CardSection/>
      <AppSection/>
    </div>
  )
} ;
export default FrontPage;