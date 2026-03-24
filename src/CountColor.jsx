import React,{useState,useEffect} from 'react';

const CountColor=()=>{
    const [count,setCount]=useState(0);
    const [color,setColor]=useState('green');

    useEffect(()=>{
        document.title=`Count : ${count}`;
        console.log(count + ' and ' + color);
    },[count])

    const handleAddCount=()=>{
        setCount(count=>count+1);
    }

    const handleSubCount=()=>{
        setCount(count=> count-1);
    }

    const handleColorChange=()=>{
        setColor(c=> c==='green'? 'red':'green');
    }

    return (
        <>
        <p style={{color:color}}>The count is : {count}</p>
        <br />
        <button style={{margin:'10px'}} onClick={handleAddCount}>Add Count</button>
        <button style={{margin:'10px'}} onClick={handleSubCount}>Sub Count</button>
        <button style={{margin:'10px'}} onClick={handleColorChange}>Change Color</button>
        </>

    )
}

export default CountColor;