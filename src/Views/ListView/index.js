import React, {useEffect, useState} from 'react';
import './style.scss';

const ListView = ({data}) => {
  
  return (
        <ul className='list-container'>
        {data?.map((item) => <li>{item.NameEn} {item.ImgUrl && item.ImgUrl}  {item.MidRate}</li>)}
        </ul>
  );
}

export default ListView;
