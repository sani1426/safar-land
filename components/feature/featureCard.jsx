import { Card } from 'antd';

const FeatureCard = ({ title, desc, icon }) => {
  return (
    <div className='text-center'>
      <Card
        title={title}
        className='text-center shadow-md hover:shadow-lg'
        variant='borderless'
      >
        <div className='flex items-center gap-2'>
          <span className='iconclass'>{icon}</span>
          <span>{desc}</span>
        </div>
      </Card>
    </div>
  );
};

export default FeatureCard;
