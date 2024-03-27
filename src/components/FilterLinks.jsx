import React from 'react'

export default function FilterLinks({handleFilter, rating, rate}) {
  return (
    <li onClick={()=>handleFilter(rate)} className={rating == rate ? "activeHeader" : ""}>{rate}<i className='bx bxs-star' ></i></li>
  )
}
