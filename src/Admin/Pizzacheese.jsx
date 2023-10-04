import React from 'react'

export default function Pizzacheese(props) {
    const { products } = props;
    return (
      <div>
        {products.map((product) => {
          if(product.category === 'pizza cheese'){
            return product.name ;
          }
          })}
      </div>
    )
}
