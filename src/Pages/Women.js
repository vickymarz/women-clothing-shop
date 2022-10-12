import React from 'react'
import CategoryName from '../app/components/CategoryName'
import ProductImage from '../app/components/ProductImage'
import clothImg from '../assets/images/product.png'


const Women = () => {
  const cloth = [
    {
      id: 1,
      brand: 'Apollo running shot',
      amount: '$50.00',
      product: clothImg
    },
    {
        id: 2,
        brand: 'Apollo running shot',
        amount: '$50.00',
        product: clothImg
    },
    {
        id: 3,
        brand: 'Apollo running shot',
        amount: '$50.00',
        product: clothImg
    },
    {
        id: 4,
        brand: 'Apollo running shot',
        amount: '$50.00',
        product: clothImg
    },
    {
        id: 5,
        brand: 'Apollo running shot',
        amount: '$50.00',
        product: clothImg
    },
    {
        id: 6,
        brand: 'Apollo running shot',
        amount: '$50.00',
        product: clothImg

    },
]

 const clothList = cloth.map(({id, brand, amount, product}) => (
    <ProductImage key={id} brand={brand} amount={amount} product={product}/>
 ))

  return (
    <>
      <CategoryName />
      <div>{clothList}</div>
    </>
  )
}

export default Women
