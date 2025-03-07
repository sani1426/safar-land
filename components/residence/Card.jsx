

const CardItem = ({src , title}) =>{
  return (
    <div className="min-w-[300px] h-[250px] rounded-lg shadow-md hover:shadow-xl transition-all duration-500 mb-4">
      <img className="w-full rounded-md h-[220px]" src={src} alt="" />
      <h1 className="text-2xl text-center">{title}</h1>
      <h3 className="px-3">سامان کریمی</h3>
      <div className="flex justify-between p-3">
        <p>{title}</p>
        <p>{title}</p>
      </div>
    </div>
  )
}
export default CardItem;