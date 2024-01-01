import React from 'react'
import './Home.css'
import Product from '../product/Product'

function Home() {
    return (
        <div className='home'>

            <div className="home__container">
                <img className='home__image' alt="hero image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg" />

                <div className="home__row">
                    <Product title="The lean startup" price={29.99} rating={5} image="https://www.adorebooks.in/wp-content/uploads/2022/02/Untitled-design-2022-03-08T004033.655-800x800.jpg" />
                    <Product title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239} rating={5} image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/510uEUwLn-L._AC_UF894,1000_QL80_.jpg" />
                </div>

                <div className="home__row">
                    <Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} rating={3} image="https://d2xamzlzrdbdbn.cloudfront.net/products/ed732c67-fd1a-49ec-9188-46193163609f22110733_416x416.jpg" />
                    <Product title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} rating={5} image="https://amitentp.com/wp-content/uploads/2020/09/Amazon-Echo-3rd-Gen-1-600x600.jpg" />
                    <Product title="New Apple iPad (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={589.99} rating={4} image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-finish-select-202212-12-9inch-space-gray-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670865949310" />
                </div>

                <div className="home__row">
                    <Product title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={11.99} rating={5} image="https://images-cdn.ubuy.co.in/634e32431ae07326b924d9c5-samsung-lc49rg90ssnxza-49-inch-crg9.jpg" />
                </div>

            </div>

        </div>
    )
}

export default Home
