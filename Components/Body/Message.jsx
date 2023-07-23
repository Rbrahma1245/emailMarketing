import React from 'react'
import Group_1621 from '../../Images/Group_1621.png'

const Message = () => {


    let text = [
        "Imagine a dynamic marketing channel that opens a direct line of communication between businesses and their valued customers! This is possible through strategic email marketing campaigns",
        "Bud & email campaigns are highly creative&amp; vibrant channels. We help you share exciting product launches, exclusive sales offers, and compelling news with your targeted audience. As a leading email marketing agency, coupled with our strategic approach, we deliver remarkable ROI.",
        "Gone are the days when mass mailings were sent out in a scattergun fashion. Modern email marketing strategy uses the power of consent, segmentation,"
    ]
    return (
        <div className='d-flex p-5' style={{backgroundColor:"#EBE8E8"}}>
            <div className='ml-5 w-75' >
                <img src={Group_1621} width="250px" height="300px"  />
            </div>

            <div >
                <h5 className='mt-2 text-danger'>IF SOCIAL MEDIA IS FOR REACH, EMAIL MARKETING IS  </h5>
                <h5 className='mt-2 text-danger'>FOR REVENUE</h5>
                {
                    text.map((elem, i) => {
                        return (
                            <div key={i}>
                                <p className='mt-4 text-muted'>{elem}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Message