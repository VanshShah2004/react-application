import React,{useState,useEffect} from 'react';

const CountState = ()=>{
    const [count,setCount]=useState(0);
    const [rem,setRem]=useState(10);
    useEffect(()=>{
        document.title=`Count : ${count}`;
        console.log(count);
    },[count]);

    const addCount=()=>{
        setCount(c=>c+1);
    }

    const subRem =()=>{
        setRem(r=>r-1);
    }

    return(
        <>
        <p>Count : {count}</p>
        <p>Rem : {rem}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subRem}>Sub</button>
        </>
    )
}

export default CountState;