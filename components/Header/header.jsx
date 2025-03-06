
import HeaderDearchBox from "./headerSearchBox";
import HeaderTitle from "./headerTitle";



const Header = () => {
    return ( 
        <header className="hero_section w-full overflow-hidden h-[100vh]  ">
          
            <HeaderTitle  />
            <HeaderDearchBox  />
        
        </header>
     );
}
 
export default Header;