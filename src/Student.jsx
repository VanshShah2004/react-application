import PropTypes from 'prop-types';
function Student(props){
    return (
        <div className="Student">
        <p>Name : {props.name} </p>
        <p>Age : {props. age} </p>
        <p>Studentt : {props.isStudent ? "Y" : "N"}</p>
        </div>
    );
}
Student.propTypes={
    name:PropTypes.string,
    age:PropTypes.number,
    isStudent:PropTypes.bool
}
export default Student;