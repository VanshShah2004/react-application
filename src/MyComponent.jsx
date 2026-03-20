import React,{useState} from 'react';

const MyComponent = ()=>{
    const [name,setName]=useState();
    const [age,setAge]=useState(0);
    const [isEmployed,setIsEmployed]=useState(false);

    const updateName = ()=>{
        setName("Spongebob");
    }
    const updateAge = () => {
        setAge(age+1);
    }
    const toggleOption = ()=>{
        setIsEmployed(!isEmployed);
    }
    const isEmployedStatus = ()=>{
        return (
            (isEmployed)?"YES":"NO"
        )
    }
    return (
        <div>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Employment Status : {isEmployedStatus()}</p>
            <button onClick={updateName} > Set Name</button>
            <button onClick={updateAge}>Set Age </button>
            <button onClick={toggleOption}>Toggle Employment Status</button>
        </div>
    )

}

export default MyComponent;