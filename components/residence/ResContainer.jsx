import Residence from "./Residence";

const ResContainer = () => {
    return ( 
        <div className="w-full overflow-hidden bg-gray-300 py-10 px-3">
            <div className="mx-auto" >
                <h1 className="text_3xl">اقامتگاه های جدید</h1>
            </div>
            <Residence />
        </div>
     );
}
 
export default ResContainer;