import React, {useState} from 'react'

const Home = (props) => {


  


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
