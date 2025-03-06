import PopDesCarousel from "./popDesCarousel";


const PopularDestination = () => {
  return ( 
    <div className="w-full bg-white  h-[300px] flex flex-col justify-center">
      <div className="text-center">
          <h1 className="text-2xl font-semibold">مقاصد پر طرفدار</h1>
          <h2 className="text-xl pt-3">برترین مقصد ها را با نازلترین قیمت ها رزرو نمایید.</h2>
      </div>
      <div className="pt-3">
    <PopDesCarousel />
      </div>
    </div>
   );
}
 
export default PopularDestination;