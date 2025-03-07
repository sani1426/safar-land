

const CardItem = ({src , title}) =>{
  return (
    <div className="card">
    <img  src={src} alt={title} />
    <h1 className="text-lg text-orange-600" >1900000 تومان</h1>
    <h2>my name is sman</h2>
    <div >
      <p>dont</p>
      <p>wont</p>
    </div>
    
  </div>
  )
}
export default CardItem;