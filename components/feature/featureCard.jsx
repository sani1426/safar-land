import { Card, Col} from 'antd';


const FeatureCard = ({title , desc , icon}) => {
    return ( 
        <Col span={8}>
        <Card title={title} variant="borderless">
            <div className='flex items-center gap-2'>
            <span className='iconclass'>
                {icon}
            </span>
            <span>
            {desc}
            </span>
            </div>
        </Card>
      </Col>
     );
}
 
export default FeatureCard;