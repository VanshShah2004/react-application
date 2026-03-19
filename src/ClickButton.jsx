import img_url from './assets/hero.png'
const ClickButton = ({count,setCount})=>{
    const handleClick = ()=>{
        setCount(count+1);
    };
    const ClickMe = ()=>{
        console.log("Img Clicked ");
    }
    return (
        <>
        <img src={img_url} alt="Image" onClick={()=>ClickMe()}/>
        <button
            onClick = {handleClick}
        >
            Click me
        </button>
        </>
    )
}
export default ClickButton;