import HeaderDearchBox from "./headerSearchBox";
import HeaderTitle from "./headerTitle";
import NavInfo from "./nav-1";
import Navigation from "./navigation";


const Header = () => {
    return ( 
        <header className="hero_section">
            <NavInfo />
            <Navigation />
            <HeaderTitle/>
            <HeaderDearchBox />

        </header>
     );
}
 
export default Header;