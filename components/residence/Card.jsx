import Link from "next/link";


const CardItem = ({src , title , id}) =>{
  return (
    <Link href={`/destination/${id}`} className="card">
    <img  src={src} alt={title} />
    <h1 className="text-lg text-orange-600" >1900000 تومان</h1>
    <h2>my name is sman</h2>
    <div >
      <p>dont</p>
      <p>wont</p>
    </div>
    
  </Link>
  )
}
export default CardItem;