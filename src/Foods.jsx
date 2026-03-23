import React,{useState} from 'react';

const Foods = ()=>{
    const [foods,setFoods]=useState(['apple','banana','plum']);

    const handleAddChange = ()=>{
        const newFood = document.getElementById('foodInput').value;
        setFoods(f=>[...f,newFood]);
        document.getElementById('foodInput').value='';        
    }

    const handleRemoveChange = (index)=>{
        setFoods(foods.filter((food,i)=>i!==index));
    }

    return (
        <div className="food-list-application">
            <div className='food-list'>
                <h1>Food List</h1>
                <div>
                    <ul>
                    {foods.map((food,index)=>{
                        return <li key= {index}>{food}
                        <button 
                        onClick = {()=>handleRemoveChange(index)}
                        >
                            -
                        </button>
                        </li>
                    })}
                    </ul>
                </div>
            </div>
            <div className="food-addition-container">
                <input type="text" placeholder="Enter the food : " id="foodInput" />
                <button onClick={handleAddChange}>+</button>
            </div>
        </div>
    )
}

export default Foods;