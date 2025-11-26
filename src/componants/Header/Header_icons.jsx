import { User, ShoppingCart, Search } from "lucide-react";
import '../../style/Header/HeaderIcons.css'
import Btn from "../../componants/button/button";
function HeaderIcons() {
  return (
    <div className="HeaderIcons">
      <User size={20} color="white" />
      <ShoppingCart size={20} color="white" />
      <Search size={20} color="white" />
      <Btn text={'Order Now'}/>
    </div>
  );
}

export default HeaderIcons;
