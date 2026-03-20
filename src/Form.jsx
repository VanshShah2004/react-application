import React,{useState} from 'react';

const Form = ()=>{
    const [name,setName]=useState();
    const handleNameChange=(e)=>{
        setName(e.target.value);
    }

    const [quantity,setQuantity]=useState(1);
    const handleQuantity=(e)=>{
        setQuantity(e.target.value);
    }

    const [city,setCity]=useState();
    const handleCityChange=(e)=>{
        setCity(e.target.value);
    }

    const [shipping,setShipping]=useState();
    const handleShippingChange=(e)=>{
        setShipping(e.target.value);
    }

    return (
        <div className="container-component">
            <input type="text" value={name} 
            onChange={handleNameChange} />
            <p>Name : {name}</p>

            <input type="number" value={quantity}
            onChange= {handleQuantity}
            />
            <p>Quantity : {quantity}</p>

            <select name="city" id="city"
            onChange={handleCityChange}
            >
                <option value="">Select your city</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Chennai">Chennai</option>
                
            </select>
            <p>City : {city}</p>
            <br /><br />
            <label>
                <input type="radio" value="Pickup" checked={shipping==='Pickup'} onChange={handleShippingChange}/>Pickup
            </label>

            <label>
                <input type="radio" value="Delivery" checked={shipping==='Delivery'} onChange={handleShippingChange}/>Delivery
            </label>

            <p>Shipping : {shipping} </p>
        </div>

    )
}
export default Form;