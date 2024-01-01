import React from 'react'
import './Home.css'
import Product from '../product/Product'

function Home() {
    return (
        <div className='home'>

            <div className="home__container">
                <img className='home__image' alt="hero image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg" />

                <div className="home__row">
                    <Product title="The lean startup" price={11.99} rating={5} image="https://www.adorebooks.in/wp-content/uploads/2022/02/Untitled-design-2022-03-08T004033.655-800x800.jpg" />
                    <Product title="The lean startup" price={11.99} rating={5} image="https://www.adorebooks.in/wp-content/uploads/2022/02/Untitled-design-2022-03-08T004033.655-800x800.jpg" />
                </div>

                <div className="home__row">
                    <Product title="The lean startup" price={11.99} rating={5} image="https://www.adorebooks.in/wp-content/uploads/2022/02/Untitled-design-2022-03-08T004033.655-800x800.jpg" />
                    <Product title="The lean startup" price={11.99} rating={5} image="https://www.adorebooks.in/wp-content/uploads/2022/02/Untitled-design-2022-03-08T004033.655-800x800.jpg" />
                    <Product title="The lean startup" price={11.99} rating={5} image="https://www.adorebooks.in/wp-content/uploads/2022/02/Untitled-design-2022-03-08T004033.655-800x800.jpg" />
                </div>

                <div className="home__row">
                    <Product title="The lean startup" price={11.99} rating={5} image="https://www.adorebooks.in/wp-content/uploads/2022/02/Untitled-design-2022-03-08T004033.655-800x800.jpg" />
                </div>

            </div>

        </div>
    )
}

export default Home
