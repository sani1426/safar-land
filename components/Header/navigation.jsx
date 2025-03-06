

import Link from "next/link";
import { FcMindMap } from "react-icons/fc";
import { MdLogin } from "react-icons/md";

import { IoPersonCircleOutline } from "react-icons/io5";

import ShowSideBarBtn from "../UI/ShowSidebarButton";



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
              <li className="nav-item"><Link href="#">خانه</Link></li>
              <li className="nav-item"><Link href="/aboutus">درباره ما</Link></li>
              <li className="nav-item"><Link href="#">اقامتگاه ها</Link></li>
              <li className="nav-item dropdown">
                <Link href="#">اجاره ساختمان</Link>
                <div className="dropdown_container">
                  <div className="dropdown_img_container">
                
                  </div>
                  <div>
                    <ul>
                      <li><a href="#">شماره 1</a></li>
                      <li><a href="#">شماره 2</a></li>
                      <li><a href="#">شماره 3</a></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="sign_container">
            <Link class="signup" href="#">
              <span className="text-xl" >
              <IoPersonCircleOutline />
              </span>
            
              <span>ثبت نام</span>
            </Link>
            <Link class="signin" href="#">
              <span className="text-xl">
              <MdLogin />
              </span>
           
              <span>ورود</span>
            </Link>
           
          
            
          
          </div>
         <ShowSideBarBtn />
        </div>
      </header>
     );
}
 
export default Navigation;