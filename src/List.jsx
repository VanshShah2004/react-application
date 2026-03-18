function List(){
    const fruits = [
        {id:1,name:"apple",calories:99},
        {id:2,name:"orange",calories:85},
        {id:3,name:"banana",calories:44},
        {id:4,name:"grapes",calories:77}
    ];
    fruits.sort((a,b)=>a.calories - b.calories);
    const listItems = fruits.map((fruit)=> <li key={fruit.id}>{fruit.name}</li>   )

    return ( 
    
            <ul>{listItems}</ul>
        
    )
}
export default List;