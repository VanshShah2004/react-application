import React,{useState} from 'react';
const Counter = () =>{
    const [count,setCount]=useState(0);

    const incrementCount = ()=>{
        setCount(count+1);
    }

    const decrementCount = ()=>{
        setCount(count-1); 
        console.log("Count Decremented by 1")
    }

    const resetCount = ()=>{
        setCount(0);
    }

    return(
        <div className="counter-container">
            <h1>The count is : {count}</h1>
        <button className="counter-button"
           onClick={decrementCount}
        >
            Decrement Count
        </button>
        <br />
        <button className="counter-button"
            onClick={()=>{incrementCount()}}
        >
            increment Count
        </button>
        <br />
        <button className="counter-button"
            onClick={()=>{resetCount()}}
        >
            Reset Count
        </button>
        
        </div>

    )
}
export default Counter;