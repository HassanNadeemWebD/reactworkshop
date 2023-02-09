import React from 'react'
import { useState } from 'react';



function Form() {
    const [name, setName] = useState("");
    const changeHandler = (e) => {

    //    console.log(e.target.value);
       setName(e.target.value)



    }


    return (

        
        <div className='container'><div className="input-group mb-3 mt-5">
            <span className="input-group-text" id="basic-addon1">@</span>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={name} onChange={changeHandler} aria-describedby="basic-addon1" />
        </div>

            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">@example.com</span>
            </div>





            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" placeholder="Server" aria-label="Server" />
            </div>

            <div className="input-group">
                <span className="input-group-text">With textarea</span>
                <textarea className="form-control" aria-label="With textarea" value={name}></textarea>
            </div>
            
            
            <p>{name} </p>
            </div>
    )
}

export default Form