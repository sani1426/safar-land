import Link from "next/link";
import Residence from "./Residence";

const ResContainer = () => {
    return ( 
        <div className="w-full  flex flex-col justify-center  bg-gray-200 py-10 ">
            <div className="mx-auto" >
                <h1 className="text-3xl my-4">اقامتگاه های جدید</h1>
                <h2 className="text-xl pt-7 text-orange-500">برترین مقصد ها را با نازلترین قیمت ها رزرو نمایید.</h2>
            </div>
           
            <Residence />
            <div className="container mt-4 mb-4">
            <Link className="bg-orange-500 text-white  py-2 px-4 rounded-lg w-full hover:bg-white hover:text-orange-500 text-lg transition-all duration-300 lg:w-[150px] lg:mx-auto"  href='/destination'>
            مشاهده همه اقامتگاه ها
            </Link>
            </div>

           
         
          
        </div>
     );
}
 
export default ResContainer;