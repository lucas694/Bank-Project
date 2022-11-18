import "./Btn_White.css"
const Btn_White = (props) => {
  return (
    <button onClick={props.OnClick} className={props.classNameBtn}>
      {props.BtnText}
    </button>
  );
};
export default Btn_White;