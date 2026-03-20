import React,{useState} from 'react';

const MyNewComponent = ()=>{
    const [name,setName] = useState();

    const handleNameChange = (event)=>{
        setName(event.target.value);        
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange}  />
            <p>Name : {name}</p>
        </div>
    )

}
export default MyNewComponent;