import React,{useContext} from 'react';
import {UserContext} from './ComponentA';
const ComponentC= ()=>{
    const user=useContext(UserContext);
    return (
        <div>
            <h1>Welcome to Component C</h1>
            <h2>Bye {user}</h2>
        </div>
    )
}

export default ComponentC;