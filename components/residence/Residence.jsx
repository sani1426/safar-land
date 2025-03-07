import { residance_Slidde_src } from "@/constance";
import CardItem from "./Card";




const Residence = () => {
    return ( 
        <section className="flexCard container ">
            {
                residance_Slidde_src.map(item =>(
                    <CardItem key={item.id} src={item.src} title={item.title} />
                ))
            }
        </section>
     );
}
 
export default Residence;