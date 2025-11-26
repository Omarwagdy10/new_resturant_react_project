import '../../style/Header/Header.css'
import HeaderLinks from './Header_Links';
import HeaderIcons from './Header_icons';
function Header (){
    return (
      <div className="Header container">
        <h1>Resturant Name</h1>
        <HeaderLinks/>
        <HeaderIcons/>  
      </div>
    );

}

export default Header