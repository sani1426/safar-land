

import { residance_Slidde_src } from "@/constance";
import Image from "next/image";



const DestinationDetail = ({params}) => {
    const  {id} = params
   


        const result = residance_Slidde_src.find(item => {
            item.id === id  })   

   
    return ( 
        <div>
          
            <h1 className="text-3xl">{residance.title}</h1>
            <h1 className="text-3xl">{id}</h1>
        </div>
     );
}
 
export default DestinationDetail;