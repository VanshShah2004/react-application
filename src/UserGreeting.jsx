import PropTypes from 'prop-types';

const UserGreeting = ({username = "shahdivyam" , isLoggedIn=false})=>{
    if(isLoggedIn){
        return (<h2>{username} is Logged in</h2>)
    }
    else{
        return (
            <h2> Not Logged in</h2>
        )
    }
}
UserGreeting.propTypes={
    username : PropTypes.string,
    isLoggedIn:PropTypes.bool
}
export default UserGreeting;