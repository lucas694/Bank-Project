import "./Btn_White.css"
const Btn_White = (props) => {
  return (
    <button onClick={props.OnClick} className={"Button_White"}>
      {props.BtnText}
    </button>
  );
};
export default Btn_White;