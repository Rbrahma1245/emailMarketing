import React, { useEffect, useState } from 'react'
import color from "../../Images/color.jpg"
import img from "../../Images/Group_1627.png"

import email from "../../Images/email.jpg"



const ScrollCard = () => {

  let [displayCard, setDisplayCard] = useState()

  let text1 = "Get ready for a world of infinite possibilities. Unleash the potential of emailmarketing with India's best email marketing company. We tap into tech-charged minds with creative strategists. That's how we have evolved as an innovative digital marketing agency in Bangalore. Email marketing is one of the many automation tools vital for a holistic marketing campaign design. We understand the importance of what to say and how to say it!"
  let text2 = "Onboard Bud is India's best email marketing company to experience data-drivendecision-making. Boost your email marketing automation efforts throughstrategic campaign design & implementation. Unlock smart email marketing automation tools for cost-effective solutions. Give your brand wings to soar high in the online & offline world. Bud is one of the top email marketing agencies because we integrate social media marketing, SEO, PPC Advertising, content & email marketing. Outsmart competition with our 360-degree branding services &; advertising campaigns and enjoy assured ROI."



  let ScrollCardList = [
    { id: 1, title: "Building a Quality Email List", desc: "To create a stellar first impression for your new subscribers, Bud offers the welcome email series. The email campaign design involves sending a series of emails. These emails introduce your brand,  and deliver valuable content. It is also used for enticing incentives to create a bang opening. Bud can help you captivate your targeted audience through this email marketing strategy. Bring your brand to life through our expert email marketing services." },
    { id: 2, title: "XYZ", desc: " Bud offers the welcome email series. The email campaign design involves sending a series of emails. These emails introduce your brand, give a warm welcome, and deliver valuable content. It is also used for enticing incentives to create a bang opening. Bud can help you captivate your targeted audience through this email marketing strategy. Bring your brand to life through our expert email marketing services." },
    { id: 3, title: "Crafting Engaging Subject Lines", desc: "A stellar first impression for your new subscribers, Bud offers the welcome email series. The email campaign design involves sending a series of emails. These emails introduce your brand, give a warm welcome, and deliver valuable content. It is also used for enticing incentives to create a bang opening. Bud can help you captivate your targeted audience through this email marketing strategy. Bring your brand to life through our expert email marketing services." },
    { id: 4, title: "Delivering High-Quality Content", desc: "These emails introduce your brand, give a warm welcome, and deliver valuable content. It is also used for enticing incentives to create a bang opening. Bud can help you captivate your targeted audience through this email marketing strategy. First impression for your new subscribers, Bud offers the welcome email series. The email campaign design involves sending a series of emails.  Bring your brand to life through our expert email marketing services." },
    { id: 5, title: "Optimizing for Mobile Devices", desc: " It is also used for enticing incentives for your new subscribers, Bud offers the welcome email series. The email campaign design involves sending a series of emails. These emails introduce your brand, give a warm welcome, and deliver valuable content. It is also used for enticing incentives to create a bang opening. Bud can help you captivate your targeted audience through this email marketing strategy. Bring your brand to life through our expert email marketing services." },
    { id: 6, title: "Compelling Call-to-Action (CTA)", desc: "To create a stellar can help you captivate your targeted audience through this impression for your new subscribers, Bud offers the welcome email series. The email campaign design involves sending a series of emails. These emails introduce your brand, give a warm welcome, and deliver valuable content. It is also used for enticing incentives to create a bang opening.  email marketing strategy. Bring your brand to life through our expert email marketing services." },

  ]




  return (
    <div >
      <div>

        <div className='d-flex flex-row justify-content-center align-items-center text-centre'
          style={{ backgroundImage: `url(${color})`, paddingTop: 50 }}>
          <div style={{ width: "100%" }}>
            <img src={img} style={{ width: "60%", height: "10%", marginLeft: "40%" }} />
          </div>

          <div style={{ marginLeft: "15%", color: "white" }}>
            <h5>OUR CUTTING-EDGE EMAIL MARKETING CAMPAIGNS</h5>
            <h5 className='mt-3'>Welcome Email Series</h5>
            <p style={{ margin: "20px 0px 120px", color: "white", width: "80%" }}>



              {
                displayCard?.id ? <div style={{ width: '80%' }}>

                  <p>{displayCard?.desc}</p>

                </div>
                  : <p> {ScrollCardList[0].desc}</p>

              }


            </p>
          </div>
        </div>

        <div className='d-flex flex-row justify-content-center align-items-center text-centre'>
          <h5 style={{ padding: 10, width: "40%", margin: "20px 0px", color: "#D63F35" }}>OPTIMIZE YOUR CAMPAIGNS WITH BUD'S EMAIL MARKETING STRATEGIES</h5>
        </div>

        <div className='d-flex  justify-content-center align-items-center text-centre'>
          {
            ScrollCardList.map((elem, i) => {
              return (
                <div key={i} style={{ width: "90%" }}>
                  <div>

                    <textarea onClick={() => setDisplayCard(elem)}>{elem.title}</textarea>
                  </div>
                </div>
              )
            })
          }


        </div>












      </div>

      <div className='d-flex flex-column justify-content-center align-items-center text-centre' style={{ backgroundImage: `url(${color})` }}>
        <div style={styles.textDecoration}>
          <p > {text1}</p>
          <p > {text2}</p>
        </div>

      </div>

    </div>
  )
}


let styles = {
  textDecoration: {
    padding: 10,
    width: "75%",
    color: "white",
    margin: "50px 0px 30px",
    textAlign: 'center'
  },


}

export default ScrollCard