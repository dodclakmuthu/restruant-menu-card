import React from 'react'

function Categories({ categories, active, setActive, changeMenuItems }) {

  let cats = categories.map((cat, idx) => { 
    return <div key={idx} className={cat === active ? 'active' : ''} onClick={()=>{
      changeMenuItems()
      setActive(cat)
    }}>{cat}</div>
  })

  return (
    <>
      <div className="header">Our Menu</div>
      <div className="categories">
        {cats}
      </div>
    </>
  )
}

export default Categories;
