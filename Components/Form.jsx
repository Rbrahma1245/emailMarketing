import React from 'react'
import color from "../Images/color.jpg"



const Form = () => {
    return (
        <div style={{margin:50}}>

            {/* <img class="bg-img" src={color} alt="..." /> */}

            <h6>GET IN TOUCH WITH US</h6>

            <input type='text' placeholder='Full Name' />
            <br />
            <input type='email' placeholder='Email Address' />
            <br />
            <input type='number' placeholder='Phone Number' />
            <br />
            <input type='text' placeholder='Company Name' />
            <br />
            <input type='url' placeholder='Website URL' />
            <br />
            <button>Request Free Audit</button>
        </div>
    )
}



export default Form