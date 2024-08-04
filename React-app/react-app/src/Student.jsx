

function Student(props){
    return(
        <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>isStudent: {props.isStudent?"YES":"NO"}</p>
        </div>
    );

}

//Student.propTypes ={
//    name:PropType.string,
//    age:
//}
export default Student