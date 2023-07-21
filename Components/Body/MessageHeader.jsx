import React from 'react'
import './index.css'
import color from '../../Images/color.jpg'

const MessageHeader = () => {

    let cardText = [
        "Bud's promotional emails are magic wands for spreading the right word about your product or service. They can also communicate special offers, limited-time deals, or exclusive content. Bud plans email designs in an appetizing way to ignite curiosity, create desire, and build bonds with your targeted audience. For a successful email marketing strategy, the frequency of emails needs to be increased to reinforce the message. According to the studies, 61% of email subscribers prefer weekly promotional marketing emails.",
        "Our informational emails help your targeted audience gain deeper insights into your business or brand. Its main aim is to offer valuable information enriching the receiver& knowledge. So consistency is the key here. Bud being a top email marketing company in India, we plan your email designs so that your target audiences don't & get bored.",
        "Re-engagement emails are yet another important type of email marketing. As the name implies, these emails assist in reconnecting with customers or subscribers who haven't & been active in a while. Bud  plans these email campaigns & times them for the inactive customers to get back to you. Our proficient email marketing  services deliver the best results from  your email campaigns.",
    ]


    return (
        <div style={container}>

            <h5 className='pt-5'>QUALITY VS QUANTITY, WE TRADE OFF THE RIGHT WAY!</h5>

            <div style={{  display:'flex' , marginLeft:10}}>
            {
                cardText.map((elem, i) => {
                    return (
                        <div className="card " key={i}>
                            <div className="card-body ">
                                <p className="card-text bg-light text-dark p-5">{elem}</p>
                            </div>
                        </div>
                    )
                })
            }
             </div>


        </div>
    )
}


let container = {
    backgroundImage: `url(${color})`,
    width: "100%",
    height: "300px",
    textAlign: "center",
    color: 'white',
  

}
export default MessageHeader