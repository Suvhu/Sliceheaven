import React from 'react'

export default function Pizzasauce(props) {
    const { products } = props;
    return (
      <div>
        {products.map((product) => {
          if(product.category === 'pizza sauce'){
            return product.name ;
          }
          })}
      </div>
    )
}
