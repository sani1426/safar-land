import { residance_Slidde_src } from "@/constance";
import Image from "next/image";


const DestinationDetail = ({params}) => {
    const {id} = params

   const residance = residance_Slidde_src.find(item => {
        item.id === id
    })
    return ( 
        <div>
            <Image width={300} height={300} src={residance.src} alt={residance.title} />
            <h1 className="text-3xl">{residance.title}</h1>
        </div>
     );
}
 
export default DestinationDetail;