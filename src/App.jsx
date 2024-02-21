
import React, { useState } from 'react'
import './App.css'

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const handleDigitClick = (event) => {
    const digit = event.target.value;
    setDisplayValue(prev => prev === '0' ? digit : prev + digit);
  };
  
  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(prev => prev + '.');
    }
  };

  const handleOperatorClick = (event) => {
    const nextOperator = event.target.value;
    if (prevValue !== null) {
      handleEqualClick();
    }
    setOperator(nextOperator);
    setDisplayValue(prev => prev + nextOperator);
    setPrevValue(parseFloat(displayValue));
  };

  const handleEqualClick = () => {
    const currentValue = parseFloat(displayValue);
    let result = 0;

    switch (operator) {
      case '+':
        result = prevValue + currentValue;
        break;
      case '-':
        result = prevValue - currentValue;
        break;
      case '*':
        result = prevValue * currentValue;
        break;
      case '/':
        result = prevValue / currentValue;
        break;
      default:
        result = currentValue;
    }

    setDisplayValue(String(result));
    setPrevValue(null);
    setOperator(null);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setPrevValue(null);
    setOperator(null);
  };

  const handleDeleteClick = () => {
    setDisplayValue(prev => prev.length === 1 ? '0' : prev.slice(0, -1));
  };


  return (
    
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
<div className=''>
  <div style={{width:'400px'}} className='bg-white p-5 rounded'>
  <h2 style={{color:'black'}}>Calculator</h2>
  <div className="mb-2 rounded bg-black" style={{textAlign:'right',height:'40px',color:'white'}} >
  {displayValue}
  </div>
  <div className="row" >
    <div className="col-3">
  
    </div>
        <div className="col-3">
  <button className='btn btn-white' style={{color:'black'}} onClick={handleClearClick}>AC</button>
        </div>
        <div className="col-3">
        <button className='btn btn-white' style={{color:'black'}} onClick={handleDeleteClick}>DEL</button>
        </div>
        <div className="col-3">
        <button className='btn btn-white' style={{color:'black'}} onClick={handleOperatorClick} value="/">/</button>
        </div>
        </div>
  
        <div className="row" >
    <div className="col-3">
    <button className='btn btn-white' style={{color:'black'}} onClick={handleDigitClick} value="7">7</button>
  
    </div>
        <div className="col-3">
  <button className='btn btn-white' style={{color:'black'}} onClick={handleDigitClick} value="8">8</button>
        </div>
        <div className="col-3">
        <button className='btn btn-white' style={{color:'black'}} onClick={handleDigitClick} value="9">9</button>
        </div>
        <div className="col-3">
        <button className='btn btn-white' style={{color:'black'}} onClick={handleOperatorClick} value="*">*</button>
        </div>
        </div>
  
        <div className="row" >
    <div className="col-3">
    <button className='btn btn-white' style={{color:'black'}} onClick={handleDigitClick} value="4">4</button>
  
    </div>
        <div className="col-3">
  <button className='btn btn-white' style={{color:'black'}} onClick={handleDigitClick} value="5">5</button>
        </div>
        <div className="col-3">
        <button className='btn btn-white' style={{color:'black'}} onClick={handleDigitClick} value="6">6</button>
        </div>
        <div className="col-3">
        <button className='btn btn-white' style={{color:'black'}} onClick={handleOperatorClick} value="+">+</button>
        </div>
        </div>
  
        <div className="row" >
    <div className="col-3">
    <button className='btn btn-white' style={{color:'black'}} onClick={handleDigitClick} value="1">1</button>
  
    </div>
        <div className="col-3">
  <button className='btn btn-white' style={{color:'black'}} onClick={handleDigitClick} value="2">2</button>
        </div>
        <div className="col-3">
        <button className='btn btn-white' style={{color:'black'}} onClick={handleDigitClick} value="3">3</button>
        </div>
        <div className="col-3">
        <button className='btn btn-white' style={{color:'black'}} onClick={handleOperatorClick} value="-">-</button>
        </div>
        </div>
        <div className="row" >
    <div className="col-3">
    <button className='btn btn-white' style={{color:'black'}} onClick={handleDigitClick} value="0">0</button>
  
    </div>
        <div className="col-3">
  <button className='btn btn-white' style={{color:'black'}} onClick={handleDecimalClick}>.</button>
        </div>
       <div className="col-2"></div> 
        <div className="col-4">
        <button className='btn btn-white' style={{color:'black'}}  onClick={handleEqualClick}>=</button>
        </div>
       
        </div>
  </div>
  
</div>
    </div>
   
  )
}

export default App
