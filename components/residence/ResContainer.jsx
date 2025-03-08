import Link from "next/link";
import Residence from "./Residence";

const ResContainer = () => {
    return ( 
        <div className="w-full text-center  flex flex-col justify-center  bg-gray-200 py-10 ">
            <div className="mx-auto text-center" >
                <h1 className="text-4xl font-semibold my-4">اقامتگاه های جدید</h1>
                <h2 className="text-xl pt-7 text-orange-500">برترین مقصد ها را با نازلترین قیمت ها رزرو نمایید.</h2>
            </div>
           
            <Residence />
            <div className="container mt-4 mb-4 text-center w-full mx-auto">
            <Link className="bg-orange-500 text-white  py-2 px-4 rounded-lg w-full hover:bg-white hover:text-orange-300 text-lg transition-all duration-500  "  href='/destination'>
            مشاهده همه اقامتگاه ها
            </Link>
            </div>

           
         
          
        </div>
     );
}
 
export default ResContainer;