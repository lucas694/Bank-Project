import "./Btn_Green.css"
const Btn_Green = (props) => {
    return (
        <button onClick={props.OnClick} className={"Button_Green"}>
          {props.BtnText}
        </button>
    );
};
export default Btn_Green;