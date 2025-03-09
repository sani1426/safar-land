import Image from "next/image";
import Link from "next/link";


const CardItem = ({src , title , id}) =>{
  return (
    <Link href={`/destination/${id}`} className="card">
    <Image  src={src} alt={title} />
    <h1 className="text-lg text-orange-600" >1900000 تومان</h1>
    <h2>{title}</h2>
    <div >
      <p>متن تصادفی</p>
      <p>متن تصادفی</p>
    </div>
    
  </Link>
  )
}
export default CardItem;