import React from 'react'
import Form from './Form'

const FormSection = () => {

    let text = "Optimal email marketing campaigns inspire excitment and curiosity. It creates meaningful relationships through wonderfully crafted words. Prominent email marketing companies in India, like BUD, can help you personalize your story. In other words, we deliver tailored messages straight to your client & inbox. Our email campaigns convey your company & goals are target. We resonate with the recipients, their, etc., capturing their attention and inspiring them to act."

    return (
        <div className='d-flex mb-sm-2 ml-sm-2 mb-lg-5 ml-lg-5  '>
            <div className='mb-sm-2 ml-sm-2 mt-lg-5 ml-lg-5 ' style={{ width: "60%"  }}>
                <p className='mt-lg-5 text-danger font-weight-bold'>ARE YOU HUNTING FOR A GOOD MARKETING STRATEGY  </p>
                <p className='text-danger  font-weight-bold'>TO ENGAGE WITH YOUR CLIENTS ACTIVELY?</p>

                <p className='text-secondary mt-lg-4 mb-lg-4'>Email marketing campaigns are the best marketing solutions for you</p>

                <p className='text-muted mr-lg-5'>{text}</p>

                <button type="button" className="btn btn-outline-danger">Danger</button>
            </div>
            <Form />
        </div>
    )
}

export default FormSection