import React, {useState} from 'react'

const Home = (props) => {


    const [state, setState] = useState(0);
    function showAlert() {
        alert(state);
    }

    function addOne() {
        setState(state + 1);
    }

 


    return(
        <div>
            <h1>Home Page</h1>
    <p>{props.title}</p>
    <button onClick={showAlert}>Click</button>
    <button onClick={addOne}>Dodawanie</button>
        </div>
       
    );
}

export default Home;
