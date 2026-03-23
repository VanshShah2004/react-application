import React,{useState} from 'react';

const ColorPicker = ()=>{
    const [color,setColor]=useState('#FFFFFF');

    const handleColorChange = (e)=>{
        setColor(e.target.value);
    }

    return(
        <div className='color-picker-application'>
            <h1>Color Picker Application</h1>
            <div className='color-picker'>
                <div style={{backgroundColor : color}}>
                    The color chosen is : {color}
                </div>
                <div>
                    <label>
                        Select your color : <input type="color" value={color} 
                        onChange={handleColorChange}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}
export default ColorPicker;