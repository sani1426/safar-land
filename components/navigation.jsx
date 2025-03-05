import Link from "next/link";
import { FcMindMap } from "react-icons/fc";
import { MdLogin } from "react-icons/md";
import { RiMenuFill } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5";

const Navigation = () => {
    return ( 
        <header class="header">
        <div class="row">
          <Link href="/" class="logo_container">
            سفر لنــــــــــــد
            <span>
            <FcMindMap />
            </span>
          </Link>
          <div class="nav">
            <ul class="nav_list">
              <li class="nav-item"><Link href="#">خانه</Link></li>
              <li class="nav-item"><Link href="#">بلاگ</Link></li>
              <li class="nav-item"><Link href="#">اقامتگاه ها</Link></li>
              <li class="nav-item dropdown">
                <Link href="#">اجاره ساختمان</Link>
                <div class="dropdown_container">
                  <div class="dropdown_img_container">
                    <img src="./public/heaader.jpg" alt="" />
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
          <div class="sign_container">
            <Link class="signup" href="#">
            <IoPersonCircleOutline />
              <span>ثبت نام</span>
            </Link>
            <Link class="signin" href="#">
            <MdLogin />
              <span>ورود</span>
            </Link>
            <button id="menu-button">
             <RiMenuFill />
            </button>
          </div>
        </div>
      </header>
     );
}
 
export default Navigation;