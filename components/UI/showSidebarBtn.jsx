"use client"

import { useAppContext } from "@/context/AppContext";

const ShowSidebarButton = () => {
    const {ShowMenu}=useAppContext()
    return ( 
       <button className="cursor-pointer" onClick={()=>ShowMenu(true)}>
<svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 96 960 960" width="35"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
       </button>
     );
}
 
export default ShowSidebarButton;