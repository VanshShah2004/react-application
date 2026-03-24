import React,{useState,useEffect} from 'react';

const WindowSize = ()=>{
    const [width,setWidth]=useState(window.innerWidth);
    const [height,setHeight]=useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener('resize',handleResize);
        document.title=`H : `+height+' W: '+width;
        console.log('EVENT LISTENER ADDED');

        return ()=>{window.removeListener('resize',handleResize)
        console.log('EVENT LISTENER REMOVED')};
        
},[])

    const handleResize = ()=>{
        handleWidthChange();
        handleHeightChange();
    }
    const handleWidthChange = ()=>{
        setWidth(window.innerWidth);
    }
    const handleHeightChange=()=>{
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <h1>Width  : {width} </h1>
            <h1>Height : {height}</h1>
        </div>
    )
}

export default WindowSize;