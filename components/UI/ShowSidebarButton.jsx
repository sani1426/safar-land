"use client"
import { RiMenuFill } from "react-icons/ri";

import { useAppContext } from "@/context/AppContext";

const ShowSideBarBtn = () => {
 const {ShowMenu , activeMenu} = useAppContext()
    return ( 
        <span onClick={()=> ShowMenu(!activeMenu)} className="text-3xl py-[.5rem] px-[.7rem] bg-transparent text-black md:hidden">
        <RiMenuFill />
        </span>
     );
}
 
export default ShowSideBarBtn;