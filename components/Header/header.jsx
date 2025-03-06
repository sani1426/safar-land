import HeaderCarousel from "./HeaderLider";
import HeaderDearchBox from "./headerSearchBox";
import HeaderTitle from "./headerTitle";



const Header = () => {
    return ( 
        <header className="hero_section w-full h-[80vh] overflow-hidden md:h-[100vh] ">
          
            <HeaderTitle className='hidden md:block' />
            <HeaderDearchBox className='hidden md:block' />
        <HeaderCarousel  className='md:hidden'/>
        </header>
     );
}
 
export default Header;