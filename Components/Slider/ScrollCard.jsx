import React, { useEffect, useState } from 'react'
import color from "../../Images/color.jpg"
import img from "../../Images/Group_1627.png"


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
    { id: 7, title: "Delivering High-Quality Content", desc: "These emails introduce your brand, give a warm welcome, and deliver valuable content. It is also used for enticing incentives to create a bang opening. Bud can help you captivate your targeted audience through this email marketing strategy. First impression for your new subscribers, Bud offers the welcome email series. The email campaign design involves sending a series of emails.  Bring your brand to life through our expert email marketing services." },
    { id: 8, title: "Optimizing for Mobile Devices", desc: " It is also used for enticing incentives for your new subscribers, Bud offers the welcome email series. The email campaign design involves sending a series of emails. These emails introduce your brand, give a warm welcome, and deliver valuable content. It is also used for enticing incentives to create a bang opening. Bud can help you captivate your targeted audience through this email marketing strategy. Bring your brand to life through our expert email marketing services." },
    { id: 9, title: "Compelling Call-to-Action (CTA)", desc: "To create a stellar can help you captivate your targeted audience through this impression for your new subscribers, Bud offers the welcome email series. The email campaign design involves sending a series of emails. These emails introduce your brand, give a warm welcome, and deliver valuable content. It is also used for enticing incentives to create a bang opening.  email marketing strategy. Bring your brand to life through our expert email marketing services." },
  ]


  return (
    <div >
      <div>
        <div className='d-flex flex-row justify-content-center align-items-center text-centre'
          style={{ backgroundImage: `url(${color})`, paddingTop: 50 }}>
          <div style={{ width: "100%", marginLeft: '5rem' }}>
            <img src={img} style={styles.imageDesign} />
          </div>

          <div style={styles.textContainer}>
            <h5>OUR CUTTING-EDGE EMAIL MARKETING CAMPAIGNS</h5>
            <h5 className='mt-3'>Welcome Email Series</h5>
            <p style={styles.text3}>
              

              <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div style={{ margin: '0rem 10rem' }}>
                      <p>{ScrollCardList[0].desc}</p>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="4000">
                    <div style={{ margin: '0rem 10rem' }}>
                      <p>{ScrollCardList[1].desc}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div style={{ margin: '0rem 10rem' }}>
                      <p>{ScrollCardList[2].desc}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div style={{ margin: '0rem 10rem' }}>
                      <p>{ScrollCardList[3].desc}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div style={{ margin: '0rem 10rem' }}>
                      <p>{ScrollCardList[4].desc}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div style={{ margin: '0rem 10rem' }}>
                      <p>{ScrollCardList[5].desc}</p>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div style={{ margin: '0rem 10rem' }}>
                      <p>{ScrollCardList[6].desc}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div style={{ margin: '0rem 10rem' }}>
                      <p>{ScrollCardList[7].desc}</p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div style={{ margin: '0rem 10rem' }}>
                      <p>{ScrollCardList[8].desc}</p>
                    </div>
                  </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>


            </p>
          </div>
        </div>

        <div className='d-flex flex-row justify-content-center align-items-center text-centre'>
          <h5 style={styles.title}>OPTIMIZE YOUR CAMPAIGNS WITH BUD'S EMAIL MARKETING STRATEGIES</h5>
        </div>

        <div className='d-flex flex-row justify-content-center align-items-center text-centre' style={styles.box}>
          {
            ScrollCardList.map((elem, i) => {
              return (
                <div className="card " style={styles.cardContainer} key={i}>
                  <div className="card-body " style={styles.cardBody}>
                    <textarea rows="10" style={styles.textArea} onClick={() => setDisplayCard(elem)}>
                      {
                        displayCard?.id ? elem.desc : elem.title
                      }
                    </textarea>
                  </div>
                </div>
              )
            })
          }

        </div>

      </div>

      <div className='d-flex flex-column justify-content-center align-items-center text-centre mt-5 ' style={{ backgroundImage: `url(${color})` }}>
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
  textContainer: { marginLeft: "1%", color: "white" },
  imageDesign: { height: "15rem" },
  text3: { margin: "20px 0px 120px", color: "white", width: "80%" },
  title: {
    padding: 10,
    width: "40%",
    margin: "20px 0px",
    textAlign: "center",
    color: "#D63F35"
  },

  textArea: {
    textAlign: 'center',
    width: "100%",
    outline: 'none',
    resize: 'none',
    border: "none"

  },
  box: {
    display: 'flex',
    marginTop: "1rem",
    flexWrap: 'wrap'
  },
  cardContainer: {
    width: "28%",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    border: "none",
    margin: "0.5rem"
  },
  cardBody: {
    textAlign: 'center',
    padding: "0.5rem",
    border: "none"
  },




}

export default ScrollCard