
import { IoSearch } from "react-icons/io5";


const HeaderDearchBox = () => {
    return (
        <div className="header-search container">
        <input type="text" placeholder="کد محل اقامت گاه" />
        <span>
        <IoSearch />
        </span>
      
      </div>
     );
}
 
export default HeaderDearchBox;