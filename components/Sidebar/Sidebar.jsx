"use client"

import Link from "next/link";
import "./sidebar.css";
import { useAppContext } from "@/context/AppContext";



const Sidebar = () => {
    const {activeMenu , ShowMenu}=useAppContext()
    return (
        <>
          <ul className={`sidebar ${activeMenu ? "show-side" : ""}`}>
            <li>
             <button
             onClick={()=> ShowMenu(false)}
             className="closebtn">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="26"
                  viewBox="0 96 960 960"
                  width="26"
                >
                  <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                </svg>
                </button>
            </li>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li>
              <Link href="/aboutus">درباره ما</Link>
            </li>
            <li>
              <Link href="/contact">تماس با ما</Link>
            </li>
            <li>
              <Link href="/destination">اقامتگاه ها</Link>
            </li>
            <li>
              <Link href="tours">تورها</Link>
            </li>
          </ul>
        </>
      )
}
 
export default Sidebar;