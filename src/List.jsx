function List({category,items}){

   const ItemList = items.map((item)=> <li key={item.id}>{item.name} - {item.calories}</li>)
    return (
        <>
        <h2>{category}</h2>
        <ol>
            {ItemList}
        </ol> 
        </>   
    )
}
export default List;