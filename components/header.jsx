import HeaderDearchBox from "./headerSearchBox";
import HeaderTitle from "./headerTitle";
import NavInfo from "./nav-1";
import Navigation from "./navigation";


const Header = () => {
    return ( 
        <header className="hero_section w-full h-[80vh] overflow-hidden md:h-[100vh] ">
            <NavInfo />
            <Navigation />
            <HeaderTitle/>
            <HeaderDearchBox />

        </header>
     );
}
 
export default Header;