import heropng from './assets/hero.png'
function Card ({details}){
    return (
        <div className="card">
            <img src={heropng} alt="Hero" />
            <h2>Bro Code</h2>
            <p>{details}</p>
        </div>
    )
}
export default Card;