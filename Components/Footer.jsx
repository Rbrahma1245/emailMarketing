import React from 'react'

const Footer = () => {

    let footerText = [
        { title: 'Brand Management' },
        { title: 'Creative Services' },
        { title: 'Digital Marketing' },
        { title: 'Get in touch with us' },
    ]
    return (
        <div>
            <div style={{ backgroundColor: '#24282F', textAlign: 'center', paddingTop: 4 }}>
                <h5 className='mt-4 text-white'>Is there something you want to discuss with us  </h5>
                <br />
                <button type="button" className="btn btn-info">LEAVE A MESSAGE</button>

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        footerText.map((elem, i) => {
                            return (
                                <div className="card" style={{ width: '18rem' }} key={i}>

                                    <div className="card-body text-white">
                                        <h5 className="card-title">{elem.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

            <div style={{ backgroundColor: '#050606', color: 'white', padding: 5, paddingLeft: 15, fontSize: 14 }}>
                Copyright @ Budindia 2023
            </div>
        </div>
    )
}

export default Footer