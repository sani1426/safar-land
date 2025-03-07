

const CardItem = ({src , title}) =>{
  return (
    <div className="card">
    <img  src={src} alt={title} />
    <h1 >this is me</h1>
    <h2>19000000 تومان</h2>
    <div >
      <p>dont</p>
      <p>wont</p>
    </div>
    
  </div>
  )
}
export default CardItem;