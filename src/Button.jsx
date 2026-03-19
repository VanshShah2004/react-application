const Button = (name) =>{
    let count=0;
    const handleClick = ()=>{
        console.log("You clicked the button");
    }

    const handleClick2=()=>{
        console.log(`${name} stop clicking me`)
    }

    const finalHandle = ()=>{
        if(count<3){
            count++;
            <div>{handleClick()}</div>
        }
        else{
            console.log("Stop clicking me!!");
            <div> {handleClick2()}</div>
        }
    }
    return (
        <button onClick={()=>finalHandle()}>
            Click Me
        </button>
    )
}
export default Button;