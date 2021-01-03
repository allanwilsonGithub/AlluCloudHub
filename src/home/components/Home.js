import React from 'react'
import home_image from '../media/home_image.jpg'

const Home = () => {
    return (
        <div align='center'>
          <img src={home_image} alt="home" width="300" height="500"></img>
          <h1>Contact</h1>
          <p className="contact_text">email: allan@allanwilson.net</p>
        </div>
    )
}

export default Home