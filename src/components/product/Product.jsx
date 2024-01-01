import React from 'react'
import './Product.css'

const Product = () => {
    return (
        <div className='product'>

            <div className="product__info">

                <p>The lean startup</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>11.96</strong>
                </p>
                <div className="product__rating">
                    <p>🌟🌟🌟</p>
                </div>
            </div>

            <img src="https://www.adorebooks.in/wp-content/uploads/2022/02/Untitled-design-2022-03-08T004033.655-800x800.jpg" alt="startup" />

            <button>Add to Basket</button>

        </div>
    )
}

export default Product
