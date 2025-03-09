import { featureCard } from '@/constance';
import { Row } from 'antd';
import FeatureCard from './featureCard';

const Feature = () => {
  return (
    <div>
      <Row gutter={16}>
        {featureCard.map((item) => (
          <FeatureCard
            key={item.id}
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        ))}
      </Row>
      <div>
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
