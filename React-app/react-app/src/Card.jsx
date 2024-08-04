import porshe from './assets/porshe.jpg';

function Card() {
    
    
    return(
        <div className="card">
            <img className= "card-img" src={porshe} alt="ferrari car" />
            <h1 className="card-title">SRI THARUN</h1>
            <p className="card-para">hi iam learning how to create a React application</p>
        </div>
    );
    
    
}

export default Card