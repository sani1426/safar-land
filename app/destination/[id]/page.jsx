"use client"

import { residance_Slidde_src } from "@/constance";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const DestinationDetail = ({params}) => {
    const  {id} = useParams()
   
    const [residance , setResidance] = useState()

    useEffect(()=> {
        const result = residance_Slidde_src.find(item => {
            item.id === id  })
            setResidance(result)
    },[])

   
    return ( 
        <div>
            <Image width={300} height={300} src={residance.src} alt={residance.title} />
            <h1 className="text-3xl">{residance.title}</h1>
        </div>
     );
}
 
export default DestinationDetail;