
import { IoSearch } from "react-icons/io5";


const HeaderDearchBox = () => {
    return (
        <div class="header-search container">
        <input type="text" placeholder="کد محل اقامت گاه" />
        <span className="text-xl">
        <IoSearch />
        </span>
      
      </div>
     );
}
 
export default HeaderDearchBox;