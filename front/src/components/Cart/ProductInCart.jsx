import React from 'react'

export  const ProductInCart = ({ item , addToCart , removeFromCart}) => {
  return (
    <div>
         <h3>{item.name}</h3>
            <div className="information">
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <button
                // size="small"
                // disableElevation
                // variant='contained'
                onClick={() => removeFromCart(item._id)}
                >
                    -
                </button>
                <p>{item.amount}</p>
                <button
                // size="small"
                // disableElevation
                // variant='contained'
                onClick={() => addToCart(item)}
                >
                    +
                </button>
            </div>
    </div>
  )
}
