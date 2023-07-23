import React from 'react'

const MessageBox = () => {

    let messageCard = [
        { title: 'DIRECT COMMUNICATION', text: "Email campaigns have one ability that other channels don't. It creates valuable  personal touches at scale. Our email marketing campaigns allow your brand to communicate not just to your targeted audience. We help you create  a sense of personal connection. We  design email campaigns for one-toone conversation, fostering trust and  building stronger relationships." },
        { title: 'COST-EFFECTIVE', text: 'efwe' },
        { title: 'TARGETED REACH', text: 'wew' },
        { title: 'MEASURABLE RESULTS', text: 'twt' },
        { title: 'AUTOMATION & EFFICIENCY', text: 'wetw' },
        { title: 'VERSATILITY & CREATIVITY', text: 'wtw' }
    ]


    return (
        <div className='d-flex flex-column justify-content-center align-items-center text-centre' style={{ marginTop: 130 }}>
            <div style={{ textAlign: 'center', width: "50%" }} >
                <h5 className='mt-lg-5 text-danger font-weight-bold, mb-4'>WE DELIVER THE RIGHT MESSAGE, TO THE RIGHT AUDIENCE, AT THE RIGHT TIME </h5>
                <p className='text-muted' >
                    Bud plans your email marketing campaigns to offer many advantages benefitting your
                    business. Studies state that around 83% of consumers engage better through effective email
                    campaigns. Our holistic email marketing services assure the following benefits:
                </p>
            </div>

            <div className='d-flex flex-row justify-content-center align-items-center text-centre' style={{ display: 'flex', marginLeft: 10, flexWrap: 'wrap' }}>
                {
                    messageCard.map((elem, i) => {
                        return (
                            <div className="card w-50 " key={i}>
                                <div className="card-body">
                                    <h5 className="card-title">{elem.title}</h5>
                                    <p className="card-text bg-light text-dark p-5 ">{elem.text}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>




        </div>
    )
}

export default MessageBox