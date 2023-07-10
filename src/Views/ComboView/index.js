import React, {useEffect, useState} from 'react';
import './style.scss';

const ComboView = ({data}) => {
    const [filteredData, setFilteredData] = useState(data);
    
    const filterTable = (value) => {
        let newData;
        if(value !== 'All') {
            newData = data?.find((el) => el.NameEn === value);
            setFilteredData([newData]);
        } else {
            setFilteredData(data);
        }
    };
   
  return (
    <div className='combo-view'>
        <select className='filter-btn' onChange={(e) => filterTable(e.target.value)} name="choice">
            <option value='All'>All</option>
            {data?.map((elem) => <option value={elem.NameEn}>{elem.NameEn}</option>)}
        </select>

        <table>
            <tr>
                <th>Currency ID</th>
                <th>Currency Name</th>
                <th>Currency Value</th>
            </tr>
            {filteredData?.map((elem) => 
                <tr>
                    <td>{elem.CurrencyId}</td>
                    <td>{elem.NameEn} {elem.ImgUrl && elem.ImgUrl}</td>
                    <td>{elem.MidRate}</td>
                </tr>
            )}
        </table>
    </div>
  );
}

export default ComboView;
