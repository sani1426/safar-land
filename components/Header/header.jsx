
import HeaderDearchBox from "./headerSearchBox";
import HeaderTitle from "./headerTitle";



const Header = () => {
    return ( 
        <header className="hero_section w-full h-[100vh] overflow-hidden">
          
            <HeaderTitle  />
            <HeaderDearchBox  />
        
        </header>
     );
}
 
export default Header;