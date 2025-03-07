import Residence from "./Residence";

const ResContainer = () => {
    return ( 
        <div className="w-full overflow-hidden bg-gray-300 py-10 px-3">
            <div>
                <h1 className="text_2xl">اقامتگاه های جدید</h1>
            </div>
            <Residence />
        </div>
     );
}
 
export default ResContainer;