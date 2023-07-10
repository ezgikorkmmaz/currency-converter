import './App.css';
import React, {useEffect, useState} from 'react';
import ListView from './Views/ListView';
import ComboView from './Views/ComboView';
import GridView from './Views/GridView';
import Converter from './Components/Converter';
import {data} from './constants/data';

//There is two type of data, one I obtained using a GET request and the one I manually entered you can check both by uncommenting useEffect and commenting imported data.

function App() {
    // const [data, setData] = useState();
    const [selectedView, setSelectedView] = useState('list');

// useEffect(() => {
//   fetch('https://test.nakitakisimiz.com/wapia/cmdtbl/dCompanyExchangeRate')
//       .then(response => response.json())
//       .then(data => 
//         setData(data)
//       );
// }, []);

const handleChange = (value) => {
  setSelectedView(value);
}

  return (
      <div className='App'>
        <div className='view-container'>
          <select onChange={(e) => handleChange(e.target.value)} className='btn-container' name="currency" id="currency">
            <option value="list">List View</option>
            <option value="table">Table View</option>
            <option value="grid">Grid View</option>
          </select>

          {selectedView === 'list' ? 
            <ListView data={data} />
          :   
            selectedView === 'grid' ? 
            <GridView data={data}/>
            : <ComboView data={data}/>
          }
        </div>
        <Converter data={data} />
      </div>

  );
}

export default App;
