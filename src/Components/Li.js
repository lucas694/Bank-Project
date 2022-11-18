import "./Li.css"
const Li = (props) =>{
  return(

      <li className={props.LiClass}>{props.LiIcon} {props.Text}</li>
  )
};
export default Li