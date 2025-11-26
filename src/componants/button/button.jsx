import '../../style/Btn/Btn.css'
function Btn({text,styleName}){
return <button className={`Navbtn ${styleName}`}>{text}</button>;
}

export default Btn