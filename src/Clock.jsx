import React,{useState,useEffect} from 'react';

const Clock = ()=>{
    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        },1000);   
    },[])

    const formatTime= ()=>{
        let hr=time.getHours();
        let min=time.getMinutes();
        let sec=time.getSeconds();
        const tm = (hr>=12) ? "PM" : "AM";
        if(hr==12) hr=12;
        else if(hr>12) hr=hr%12;

        if(hr<10) hr="0"+hr;
        if(min<10) min="0"+min;
        if(sec<10) sec="0"+sec;

        return `  Time : ${hr} : ${min} : ${sec}  ${tm}`
        

        
    }
    return (
        <div className="clock-application">
            <div className="clock">
                <h1>{formatTime()}</h1>
            </div>
        </div>
    )
}

export default Clock;