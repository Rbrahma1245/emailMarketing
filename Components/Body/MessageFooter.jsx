import React from 'react'
import color from "../../Images/color2.jpg"
import task from "../../Images/task.png"
import illustration from "../../Images/illustration.png"
import engineering from "../../Images/engineering.png"
import funding from "../../Images/funding.png"

const MessageFooter = () => {

    let text1 = "DEAR USERS, FIND OUT WHAT MAKES US DIFFERENT"
    let text2 = "WE BELIEVE THAT PERSONALIZATION IS NOT ABOUT FIRST/LAST NAMES. IT’S ABOUT RELEVANT CONTENT:"
    let text3 = "On the surface, email marketing seems to be an easy task - crafting an attractive mailer and sending them out to as many contacts as possible. But when there are a variety of companies across a variety of industries doing the same, content becomes critical. Content represents all forms of media including graphics and verbal communication. It needs to be relevant, fresh, and consistent,to do so, market research is necessary. It is important to understand fundamental questions like ‘What fits?’, ‘Where?’ etc.  That’s where the proficiency of Bud, the top email marketing company in India comes into play. We can deliver exceptional results to drive your business forward."

    let text4 = "WE BELIEVE THAT PERSONALIZATION IS NOT ABOUT FIRST/LAST NAMES. IT’S ABOUT RELEVANT CONTENT"
    let text5 = "On the surface, email marketing seems to be an easy task - crafting an attractive mailer and sending them out to as many contacts as possible. But when there are a variety of companies across a variety of industries doing the same, content becomes critical. Content represents all forms of media including graphics and verbal communication. It needs to be relevant, fresh, and consistent, to do so, market research is necessary. It is important to understand fundamental questions like ‘What fits?’, ‘Where?’ etc.That’s where the proficiency of Bud, the top email marketing company in India comes into play. We can deliver exceptional results to drive your business forward."

    let cardList = [
        { title: "We plan & strategise", desc: "On the surface, email marketing seems to be an easy task - crafting an attractive mailer and sending them out to as many contacts as possible. But when there are a variety of companies across a variety of industries doing the same, content becomes .", src: task },
        { title: "We don’t just deliver, we design", desc: "Good email campaigning begins with exceptional email design at Bud email marketing company in India. Our team of skilled designers crafts captivating and immersive email templates. So you can effortlessly captivate attention and fuel", src: illustration },
        { title: "We are abreast of automation", desc: "To optimize the potency of your email campaigns, we harness the power of cutting-edge marketing  automation tools. These tools empower us to streamline many facets of your email marketing journey. This includes audience segmentation,", src: engineering },
        { title: "We stay light on your pocket", desc: "Being India's best email marketing company, we know the significance of cost-effectiveness. We provide flexible pricing choices tailored to businesses of all scales. We guarantee optimal value for your investment. Our dedicated team can deliver top-notch", src: funding },
    ]




    return (
        <div>
            <div className='d-flex flex-column justify-content-center align-items-center text-centre ' style={{ backgroundImage: `url(${color})` }}>
                <div style={styles.textDecoration}>
                    <h5 > {text1}</h5>
                    <h6 style={{ marginTop: 20 }} > {text2}</h6>
                    <p style={{ marginTop: 20 }}> {text3}</p>
                </div>
            </div>

            <div className='d-flex flex-row justify-content-center align-items-center text-centre mt-5'  >
                {
                    cardList.map((elem, i) => {
                        return (
                            <div style={styles.cardDecoration}>
                                <img src={elem.src} alt='invalid' width="10%" height="10%" />
                                <h6 className='text-danger mt-2'>{elem.title}</h6>
                                <small className='text-muted' >{elem.desc} <a className='text-danger cursor-pointer'>Read more...</a></small>
                            </div>
                        )
                    })
                }
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center text-centre ' >
                <div style={styles.textDecoration}>
                    <h6 className="text-secondary" style={{ marginTop: 20 }} > {text4}</h6>
                    <p className="text-secondary" style={{ marginTop: 20 }}> {text5}</p>
                </div>
            </div>
        </div>
    )
}



let styles = {
    textDecoration: {
        padding: 10,
        width: "70%",
        color: "white",
        margin: "2% 0px 30px",
        textAlign: 'center'
    },

    cardDecoration: {
        width: "22%",
        backgroundColor: "#f0f1f3",
        borderRadius: 5,
        height: '50%',
        margin: "1rem 0.5rem ",
        padding: "1rem 1.5rem",
        
    }


}
export default MessageFooter