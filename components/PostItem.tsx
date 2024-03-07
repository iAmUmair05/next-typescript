"use client"

import React, { useState, ChangeEvent, MouseEvent } from 'react';
import PostCard from './PostCard';

const PostItem = () => {

    
  const [count, setCount] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("changed");
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("clicked");
  };

  const handleInc = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCount(count + 1);
  };

  return (
    <div>
      PostItem
      <PostCard title="this is my title" des="this is description" />

      <form action="">
        <input type="text" name="" id="" onChange={handleChange} />
        <input type="text" name="" id="" />
        <button type='submit' onClick={handleClick}></button>
        <button onClick={handleInc}>Increment= {count}</button>
      </form>
    </div>
  );
};

export default PostItem;
