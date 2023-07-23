import React from 'react'
import front from "../../Images/front.png"
import back from "../../Images/back.png"

const MessageBox = () => {

    let messageCard = [
        { title: 'DIRECT COMMUNICATION', text: "Email campaigns have one ability that other channels don't. It creates valuable  personal touches at scale. Our email marketing campaigns allow your brand to communicate not just to your targeted audience. We help you create  a sense of personal connection. We  design email campaigns for one-toone conversation, fostering trust and  building stronger relationships." },

        //DUMMY TEXT ARE GIVEN BELOW     
        { title: 'COST-EFFECTIVE', text: 'Email campaigns have one ability that other channels don' },
        { title: 'TARGETED REACH', text: 'It creates valuable  personal touches at scale.' },
        { title: 'MEASURABLE RESULTS', text: 'Our email marketing campaigns allow your brand to communicate not just to your targeted' },
        { title: 'AUTOMATION & EFFICIENCY', text: 'Email campaigns have one ability that other channels don' },
        { title: 'VERSATILITY & CREATIVITY', text: "campaigns have one ability that other channels don't. It creates valuable  personal touches at scale." }
    ]

    let endText = "Bud, a top email marketing company, can enhance customer loyalty and retention. We foster relationships through cost-effective email marketing campaigns. We help you achieve greater mind share among our targeted audience. We stimulate timely, regular communications with existing customers, encouraging repeat purchases."



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

            <div className='d-flex flex-row justify-content-center align-items-center text-centre' style={{ display: 'flex', marginTop: "6rem", marginLeft: 10, flexWrap: 'wrap' }}>
                {
                    messageCard.map((elem, i) => {
                        return (
                            <div className="card " style={{ width: "25%", margin: "0.5%", border: "1px solid black" }} key={i}>

                                <div className="card-body " style={{  textAlign:'center' }}>
                                    <img src={back} width="80%" />
                                    <p className='text-muted' style={styles.cardContainer}>{elem.title}</p>
                                    <img src={front} width="80%" style={{ marginTop: "-60%", zIndex: 1 }} />

                                </div>

                            </div>
                        )
                    })
                }
                
            </div>


            <div style={{ textAlign: 'center', width: "70%", margin:"4% 0%" }} >
                <p className='text-muted' >{endText} </p>
            </div>

        </div>
    )
}

let styles = {
    cardContainer: {
        marginLeft: "15%",
        position: "absolute",
        textAlign: "center",
        
        marginTop: "-38%",
        marginBottom: "30%",
        width: "60% ",
        height: "40%",
        backgroundColor: "#ffffff",
        fontSize: "12px"
    }
}

export default MessageBox