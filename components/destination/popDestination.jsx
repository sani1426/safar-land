import PopDesCarousel from "./popDesCarousel";


const PopularDestination = () => {
  return ( 
    <div className="w-full bg-gray-200  h-[300px] flex flex-col justify-center">
      <div className="text-center">
          <h1>مقاصد پر طرفدار</h1>
          <h2>برترین مقصد ها را با نازلترین قیمت ها رزرو نمایید.</h2>
      </div>
      <div>
    <PopDesCarousel />
      </div>
    </div>
   );
}
 
export default PopularDestination;