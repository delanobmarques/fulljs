import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/post.component';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
        <Post/>
        <Post/>
    </>
  )
}

export default Posts;