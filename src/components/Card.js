import React from 'react'
import img from './logo512.png'



function Card(props) {
    return (
        <>
            <div className="card" style={{width: "18rem" }} >
                <img src={props.source} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
         
        </>
    )
}

export default Card