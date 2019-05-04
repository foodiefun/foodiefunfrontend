import React from 'react';
import {Link} from 'react-router-dom';
import Delete from './Delete';
import Search from './Search';
import '../App.css';

const FoodList = props => {
  return (
    <>
    <Search posts={props.posts}/>
    {props.posts.map(post => (
      <div key={post.id}>
        <h2 className='heading'>{post.restaurantName}</h2>
        <img className='image' src={post.photo} alt="alt" style={imageStyle} />
        <Delete id={post.id} />
        {/* <Edit post={post} /> */}
        <Link to={`/edit/${post.id}`}> Edit </Link>
        <p className='postText'>Date Visited - {post.date}</p>
        <p className='postText'>Price {post.price}</p>
        <p className='postText'>Rating {post.rating}</p>
        <h4 className='postText'>Restaurant Info</h4>
        <p className='postText'>{post.restaurantInfo}</p>
      </div>
    ))}
    </>
  )
}

export default FoodList;





const imageStyle = {
  width: '400px',
  height: '300px'
};