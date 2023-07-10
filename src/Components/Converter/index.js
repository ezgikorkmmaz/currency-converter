import React, {useEffect, useState} from 'react';
import { Repeat } from 'react-feather';
import './style.scss';

const Converter = ({data}) => {
    const [amount, setAmount] = useState();
    const [firstCur, setFirstCur] = useState();
    const [secCur, setSecCur] = useState();
    const [convertedAmount, setConvertedAmount] = useState();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [firstCurName, setFirstCurName] = useState();
    const [secCurName, setSecCurName] = useState();

    const handleCurrencyName = (event, order) => {
        if(order === 'first'){
            setFirstCur(event.target.value);
            setFirstCurName(event.target[event.target.selectedIndex].text);
        } else if(order === 'second'){
            setSecCur(event.target.value);
            setSecCurName(event.target[event.target.selectedIndex].text);
        }
        setButtonClicked(false);
    };

    const swapCurrencies = () => {
        setFirstCur(secCur);
        setFirstCurName(secCurName);
        setSecCur(firstCur);
        setSecCurName(firstCurName);
        setButtonClicked(false);
    };
    
    const convertCurrency = () => {
        if(firstCurName === 'TRY'){
            setConvertedAmount(amount / secCur);
        } else if(secCurName === 'TRY'){
            setConvertedAmount(amount * firstCur);
        } 
        setConvertedAmount(((amount * firstCur) / secCur)); 
        setButtonClicked(true);
    };

  return (
       <div className='converter-container'>
        <div className='converter-row'>
            <input className='input-box' onChange={(e) => {setAmount(e.target.value); setButtonClicked(false)}} name="amount" type="text" placeholder="Amount" />
            <select id='first-currency' className='currency-list' onChange={(e) => handleCurrencyName(e, 'first')} value={firstCur}>
                {data?.map((elem) => <option value={elem.MidRate}>{elem.NameEn}</option>)}
            </select>

            <Repeat onClick={swapCurrencies} style={{cursor: 'pointer', margin: '0 10px'}} color="white" size={16}/>

            <select className='currency-list' onChange={(e) => handleCurrencyName(e, 'second')} value={secCur}>
                {data?.map((elem) => <option value={elem.MidRate}>{elem.NameEn}</option>)}
            </select>
            <button onClick={convertCurrency} className='convert-btn'>Convert</button>
        </div>
            {buttonClicked && 
            <div className='converter-result'>
                {(amount && convertedAmount) && 
                <>
                <span className='amount'>{amount} {firstCurName} = </span>
                <span className='converted-amount'>{convertedAmount} {secCurName} </span>
                </>
                }
            </div>
            }
       </div>
  );
}

export default Converter;
