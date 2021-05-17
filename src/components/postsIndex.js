import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/index';

function postsIndex() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return <div>List of blog posts</div>;
}

export default postsIndex;
