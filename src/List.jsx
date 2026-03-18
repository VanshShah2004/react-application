function List(){
    const fruits = ["apple","kiwi","orange","watermelon"];
    fruits.sort();
    const listItems = fruits.map((fruit)=> <li>{fruit}</li>   )

    return ( 
    
            <ol>{listItems}</ol>
        
    )
}
export default List;