import "./UlFooter.css"

const UlFooter = (props) =>{
  return (
      <ul className={"UlFooter"}>
        <li className={"LiFooter"}>
          <a href={props.Link} target={"_blank"}>{props.Li}</a>
        </li>
      </ul>
  )
};
export default UlFooter;