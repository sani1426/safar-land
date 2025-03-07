import PopDesCarousel from "./popDesCarousel";


const PopularDestination = () => {
  return ( 
    <div className="w-full bg-white mt-14 mb-28   flex flex-col justify-center">
      <div className="text-center">
          <h1 className="text-4xl text-orange-600 font-semibold">مقاصد پر طرفدار</h1>
          <h2 className="text-xl pt-7 text-gray-100">برترین مقصد ها را با نازلترین قیمت ها رزرو نمایید.</h2>
      </div>
      <div className="pt-12">
    <PopDesCarousel />
      </div>
    </div>
   );
}
 
export default PopularDestination;