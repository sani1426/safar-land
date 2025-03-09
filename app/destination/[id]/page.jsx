
const DestinationDetail = ({params}) => {

   const {id} = params


   
    return ( 
        <div>
          
            <h1 className="text-3xl">salam</h1>
            <h1 className="text-3xl">{id}</h1>
        </div>
     );
}
 
export default DestinationDetail;