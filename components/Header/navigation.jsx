

import Link from "next/link";
import { FcMindMap } from "react-icons/fc";
import { MdLogin } from "react-icons/md";

import { IoPersonCircleOutline } from "react-icons/io5";
import ShowSidebarButton from "../UI/showSidebarBtn";





const Navigation = () => {


    return ( 
        <header className="header">
        <div className="row">
          <Link href="/" class="logo_container">
            سفر لنــــــــــــد
            <span >
            <FcMindMap />
            </span>
          </Link>
          <div className="nav">
            <ul className="nav_list">
              <li className="nav-item"><Link href="/">خانه</Link></li>
              <li className="nav-item"><Link href="/aboutus">درباره ما</Link></li>
              <li className="nav-item"><Link href="/destination">اقامتگاه ها</Link></li>
              <li className="nav-item dropdown">
                <Link href="/contact">تماس با ما</Link>
              </li>
            </ul>
          </div>
          <div className="sign_container">
            <Link class="signup" href="#">
              <span title="ثبت نام" className="text-xl" >
              <IoPersonCircleOutline />
              </span>
            
              <span>ثبت نام</span>
            </Link>
            <Link class="signin" href="#">
              <span title="ورود" className="text-xl">
              <MdLogin />
              </span>
           
              <span>ورود</span>
            </Link>
           
          
            
          
          </div>
         <ShowSidebarButton  />
        </div>
      </header>
     );
}
 
export default Navigation;