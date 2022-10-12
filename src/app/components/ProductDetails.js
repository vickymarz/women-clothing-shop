import React from 'react'
import Button from './Button'

const ProductDetails = ({brand, amount}) => {
  return (
    <div>
        <p>{brand}</p>
        <p>{amount}</p>
        <p>size:</p>
        <div>
          <span>XS</span>
          <span>X</span>
          <span>M</span>
          <span>L</span>
        </div>
        <div>
          <p>color:</p>
          <span>
            <input type="color" value='red'/>
          </span>
          <span>
            <input type="color" value='red'/>
          </span>
          <span>
            <input type="color" value='red'/>
          </span>
        </div>
        <div>
        <Button children='VIEW BAG'/>
        <Button children='CHECK OUT'/>
        </div>
    </div>
  )
}

export default ProductDetails
