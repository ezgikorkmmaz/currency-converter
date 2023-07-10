import React, {useEffect, useState} from 'react';
import './style.scss';

const GridView = ({data}) => {
  return (
        <div className='grid-view'>
        {data?.map((item) => 
        <span className='each-grid'>{item.NameEn} {item.ImgUrl && item.ImgUrl} {item.MidRate}</span>
        )}
        </div>
  );
}

export default GridView;
