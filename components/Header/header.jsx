
import Image from "next/image";
import HeaderDearchBox from "./headerSearchBox";
import HeaderTitle from "./headerTitle";
import mountains from "../../public/heaader.jpg";


const Header = () => {
    return ( 
        <header className="hero_section w-full h-[100vh] overflow-hidden">
            <div>
            <Image
        alt="Mountains"
        src={mountains}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex : "-1"
        }}
      />
            </div>
          
            <HeaderTitle  />
            <HeaderDearchBox  />
        
        </header>
     );
}
 
export default Header;