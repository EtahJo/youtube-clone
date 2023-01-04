import React from 'react'
import { useParams } from 'react-router-dom'
const DetailedPage = () => {
    const {id}= useParams();
    console.log(id)
  return (
    <div>DetailedPage</div>
  )
}

export default DetailedPage