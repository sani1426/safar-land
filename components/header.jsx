import HeaderDearchBox from "./headerSearchBox";
import HeaderTitle from "./headerTitle";
import NavInfo from "./nav-1";
import Navigation from "./navigation";


const Header = () => {
    return ( 
        <header className="hero_section  w-[100vw] h-[60vh] md:h-[100vh] overflow-x-hidden">
            <NavInfo />
            <Navigation />
            <HeaderTitle/>
            <HeaderDearchBox />

        </header>
     );
}
 
export default Header;