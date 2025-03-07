

const DestinationDetail = ({params}) => {
    const {id} = params
    console.log(id);
    return ( 
        <div>
            اقامتگاه {id}
        </div>
     );
}
 
export default DestinationDetail;