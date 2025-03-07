import Residence from "./Residence";

const ResContainer = () => {
    return ( 
        <div className="w-full overflow-hidden flex flex-col justify-center  bg-gray-200 py-10 px-3">
            <div className="mx-auto" >
                <h1 className="text_3xl mb-4">اقامتگاه های جدید</h1>
            </div>
            <div className="mx-auto">
            <Residence />
            </div>
          
        </div>
     );
}
 
export default ResContainer;