

import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const CardItem = ({src , title}) => (
  <Card
    hoverable
  
    cover={<img alt={title} src={src} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export default CardItem;