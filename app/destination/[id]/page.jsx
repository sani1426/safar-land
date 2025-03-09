import { destination_Slidde_src } from "@/constance";

const DestinationDetail = ({params}) => {

   const {id} = params
   const element = {}

function getData(){
   element = destination_Slidde_src.find(item => item.id === id)
}
getData()
   
    return ( 
        <div>
          
            <h1 className="text-3xl">{element.title}</h1>
            <h1 className="text-3xl">{id}</h1>
        </div>
     );
}
 
export default DestinationDetail;