import React from 'react'
import './Home.css'
import Product from '../product/Product'

function Home() {
    return (
        <div className='home'>

            <div className="home__container">
                <img className='home__image' alt="hero image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg" />

                <div className="home__row">
                    <Product/>
                    {/* <Product/> */}
                </div>

                <div className="home__row">

                </div>

                <div className="home__row">

                </div>

            </div>

        </div>
    )
}

export default Home
