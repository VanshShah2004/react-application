import React,{useState,useEffect} from 'react';

const WindowResize = ()=>{
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener('resize',handleResize);
        console.log('EVENT LISTENER ADDED');
        return ()=>{
            window.removeEventListener('resize',handleResize);
            console.log('EVENT LISTENER REMOVED');
        }
    },[]);

    const handleResize = ()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <p>Window Width : {width}</p>
            <p>Window Height : {height}</p>
        </div>
    )
}
export default WindowResize;