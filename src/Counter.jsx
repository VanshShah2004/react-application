import React,{useState} from 'react';
const Counter = ()=>{
    const [count,setCount]=useState(0);

    const incrementCount = ()=>{
       setCount((c)=>{return c+1});
       setCount((c)=>{return c+1});
       setCount((c)=>{return c+1});
    }

    const decrementCount = () =>{
        setCount(count-1);
    }

    const resetCount = ()=>{
        setCount(0);
    }
    const b=9;
    return (
        <div className="counter-application-container">
            <h1>Counter Application</h1>
            <div>The count is : {count}</div>
            <div>
                <button className="counter-functions"
                onClick= {incrementCount}
                style={{margin:'20px'}}
                >+</button>
                <button className="counter-functions"
                onClick={decrementCount} style={{margin:'20px'}}
                >-</button>
                <button className="counter-functions"
                onClick={resetCount} style={{margin:'20px'}}
                >
                    RESET
                </button>
            </div>
        </div>
    )
}
export default Counter;