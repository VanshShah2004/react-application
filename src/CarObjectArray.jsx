import React,{useState} from 'react';

const CarObjectArray = ()=>{

    const [cars,setCars]=useState([
        {year:2024,make:'Ford',model:'Mustang'},
        {year:2025,make:'Ferrari',model:'Model No.3 '}
    ]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake,setCarMake]=useState();
    const [carModel,setCarModel] =useState();

    const handleAddCar=()=>{
        const newCarYear=document.getElementById('new-car-year').value;
        setCarYear(newCarYear);
        const newCarMake=document.getElementById('new-car-make').value;
        setCarMake(newCarMake);
        const newCarModel=document.getElementById('new-car-model').value;
        setCarModel(newCarModel);
        const newCar={
            year:newCarYear,
            make:newCarMake,
            model:newCarModel
        }
        setCars(c=>[...c,newCar]);
        document.getElementById('new-car-year').value='';
        document.getElementById('new-car-make').value='';
        document.getElementById('new-car-model').value='';
    }

    const handleYearChange=(e)=>{
        setCarYear(e.target.value);
    }

    const handleRemoveCar=(index)=>{
        setCars(c=>c.filter((car,i)=>{return i!==index}))
    }

    return (
        <div className="car-list-application">
            <div className="car-list-container">
                <h1>Car List </h1>
                <div>
                    <ul>{cars.map((car,index)=>{
                        return <li key={index}>{car.year} - {car.make} - {car.model}
                        
                        <button style={{margin:'10px'}} onClick={()=>handleRemoveCar(index)}>-</button>
                        </li>
                    })}</ul>
                </div>
            </div>
            <div className = "car-addition-container">
                Enter New Car Details : 
                <input type="number" id="new-car-year" value={carYear} placeholder="Enter Year" style={{margin:'10px'}} onChange={handleYearChange}/>
                <input type="text" id="new-car-make" value={carMake} placeholder="Enter Make" style= {{margin:'10px'}} />
                <input type="text" id="new-car-model" value={carModel} placeholder="Enter Model" style={{margin:'10px'}}/>
                <button style={{margin:'10px'}} onClick={handleAddCar}>+</button>
            </div>
            
        </div>

    )
}

export default CarObjectArray;