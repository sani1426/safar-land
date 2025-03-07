import Residence from "./Residence";

const ResContainer = () => {
    return ( 
        <div className="w-full overflow-hidden bg-gray-200">
            <div>
                <h1>اقامتگاه های جدید</h1>
            </div>
            <Residence />
        </div>
     );
}
 
export default ResContainer;