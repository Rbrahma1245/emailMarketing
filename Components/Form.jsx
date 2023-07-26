import React, { useState } from 'react'
import color2 from "../Images/color2.jpg"
import './index.css'



const Form = () => {
    let [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: ''
    })


    function commonHandler(e) {
        let { name, value } = e.target
        setForm((prev) => {
            return { ...prev, [name]: value }
        })
    }

    function submitHandler() {
        let { name, email, phone, company, website } = form


        if (name == '' || email == '' || phone == '' || company == '' || website == '') {
            alert('Please fill the details')
        }
        console.log(form);
    }


    return (
        <div style={styles.formContainer} className='col-4 p-2 mb-2' >

            <h6 className='text-white mt-3 pb-2'>GET IN TOUCH WITH US</h6>

            <input style={styles.input} type='text' name="name" placeholder='Full Name' onChange={commonHandler} />
            <br />
            <input style={styles.input} type='email' name="email"  placeholder='Email Address' onChange={commonHandler}  />
            <br />
            <input style={styles.input} type='number' name="phone"  placeholder='Phone Number' onChange={commonHandler}  />
            <br />
            <input style={styles.input} type='text' name="company"  placeholder='Company Name' onChange={commonHandler} />
            <br />
            <input style={styles.input} type='url' name="website"  placeholder='Website URL' onChange={commonHandler}  />
            <br />
            <button type="button" className="submit" style={styles.submitbtn} onClick={submitHandler}>Request Free Audit</button>
           
        </div>
    )
}

let styles = {
    formContainer: {
        marginTop: 50,
        backgroundImage: `url(${color2})`,    
        backgroundSize: '100% 100%',
        borderRadius: 10,
        padding: "30px",
        textAlign: 'center',
        height:'80%'
    },

    input: {
        borderRadius: 7,
        marginTop: 3,
        marginBottom: 10,
        padding: 5,
        paddingLeft: 10,
        width: '90%',
        border: 'none',
        outline: 'none',
        opacity: 0.5,
         
    },
    submitbtn: {
        fontSize: '14px',   
        borderRadius: 7,
        color: '#E54E82',
        padding: '6px 30px', 
        width: '50%',  
        cursor: 'pointer',
        textAlign:'center',
        marginTop: 10,
        border: 'none',
        outline: 'none',
    },
    
    
  
}





export default Form