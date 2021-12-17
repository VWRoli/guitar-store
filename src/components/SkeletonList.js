import React from 'react';
import Slider from 'react-slick';
import { settings } from '../helpers';
import PropTypes from 'prop-types';
//Components
import Skeleton from './Skeleton';

const SkeletonList = ({ itemNumber }) => {
  let numberArray = Array.from(Array(itemNumber), (_, x) => x);

  return (
    <Slider {...settings} className="list">
      {numberArray.map((_, i) => (
        <Skeleton key={i} />
      ))}
    </Slider>
  );
};

export default SkeletonList;

SkeletonList.propTypes = {
  itemNumber: PropTypes.number,
};
