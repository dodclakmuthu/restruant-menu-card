import React from 'react'

function MenuItem({ item }) {


  return (
    <div className='menu-item'>
      <div className="img-container">
        <img src={item.img} alt="" />
      </div>

      <div className="details-container">
        <div className="title">
          <h3>{item.title}</h3>
          <h4>${item.price}</h4>
        </div>
        <p>{item.desc}</p>
      </div>

    </div>
  )
}
export default MenuItem