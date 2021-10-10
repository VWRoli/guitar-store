import React from 'react'
import Slider from "react-slick";
import { settings } from "../helpers"
import Skeleton from "./Skeleton"

const SkeletonList = ({itemNumber}) => {
  let numberArray = Array.from(Array(itemNumber), (_,x) => x);

  return (
    <Slider {...settings} className='list'>
      {numberArray.map(nr=> <Skeleton /> )}
        
      </Slider>
  )
}

export default SkeletonList
