import { featureCard } from '@/constance';

import FeatureCard from './featureCard';

const Feature = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-center items-center' >
        {featureCard.map((item) => (
          <FeatureCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </div>
      <div className='py-8 w-[90%] md:w-[75%] text-center '>
        <h2 className='text-xl'>
          کجارو با تهیه محتوا برای شهرهای مختلف ایران جهان به مرجعی کامل و معتبر
          در معرفی انواع جاهای دیدنی گردشگری، هتل‌ها و رستوران‌های ایران و جهان
          تبدیل شده است.
        </h2>
      </div>
    </div>
  );
};

export default Feature;
