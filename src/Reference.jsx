import React,{useEffect,useRef} from 'react';

const Reference =()=>{
    const count=useRef(0);
    useEffect(()=>{
        console.log('Component Rendered');
    })
    
    const handleAddCount = ()=>{
        count.current=count.current+1;
        console.log(count.current);
    }
    return (
        <div>
            <h1>Count is : {count.current}</h1>
            <button onClick={handleAddCount}>Click me </button>
        </div>
    )
}
export default Reference;