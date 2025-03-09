import { Card} from 'antd';


const FeatureCard = ({title , desc , icon}) => {
    return ( 
        <div>
        <Card title={title} className='shadow-md' variant="borderless">
            <div className='flex items-center gap-2'>
            <span className='iconclass'>
                {icon}
            </span>
            <span>
            {desc}
            </span>
            </div>
        </Card>
      </div>
     );
}
 
export default FeatureCard;