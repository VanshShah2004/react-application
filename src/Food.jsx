import React,{useState} from 'react';

const Food=()=>{
    const [food,setFood]=useState(["apple","orange","banana"]);
    const [newFood,setNewFood]=useState();
    const [deleteFood,setDeleteFood]=useState();

    const handleNewFood = (e)=>{
        setNewFood(e.target.value)
    }
    const handleDeleteFood = (e)=>{
        setDeleteFood(e.target.value);
    }

    const handleAddFood=()=>{
        console.log(newFood);
        if(newFood!='') setFood(f=>([...f,newFood]));
        setNewFood(f=>(''));
    }

    const handleRemoveFood=()=>{
        console.log(deleteFood);
        const newFoodList=food.filter((f)=> { return f!=deleteFood})
        console.log(newFoodList);
        setFood(newFoodList);
    }

    const DisplayFood = (food.map(f=>{
        return <li>{f}</li>
    }))

    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {DisplayFood}
            </ul>
            <br />
            <br />
            <label>
                Add a food item : 
                <input type="text" value={newFood} onChange={handleNewFood}/>
            </label>
            <button onClick={handleAddFood}>+</button>
            <br />
            <br />
            <label>
                Delete a food item : 
                <input type="text" value = {deleteFood} onChange={handleDeleteFood} />
            </label>
            <button onClick={handleRemoveFood}>-</button>
        </div>
    )
}

export default Food;