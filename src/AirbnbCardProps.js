import React from 'react';
import './Style.css';


export default function AirbnbCardProps(props){
  const img = props.img;
  const tag = props.tag;
  const rating = props.rating;
  const quantity = props.quantity;
  const location = props.location;
  const title = props.title;
  const price = props.price;
  return(
    <div className='bnb--product'>
      <img alt='Image' src={img}
      className='bnb--product--image'>
      </img>
      <span className='bnb--product--tag'>{tag}</span>
      <div className='bnb--product--stats'>
        <span className='star'></span>
        <span className='product--rating'>{rating}</span>
        <span className='product--quantity'>({quantity}) . </span>
        <span className='product--location'>{location}</span>
      </div>
      <h6 className='bnb--product--title'>
        {title}
      </h6>
      <p className='product--price'>From ${price} / person</p>
    </div>
  );
}
