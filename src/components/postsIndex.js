import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';

function postsIndex() {
  const posts = useSelector((state) => state.posts.all);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const renderPost = () => {
    return posts.map((post) => {
      return (
        <li key={post.id} className='list-group-item'>
          <Link to={`/posts/${post.id}`}>
            <span className='pull-xs-right'>{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  };

  return (
    <div>
      <div className='text-xs-right'>
        <Link to='/posts/new' className='btn btn-primary'>
          Add a Post
        </Link>
      </div>
      <h3>Posts</h3>
      <ul className='list-group'>{renderPost()}</ul>
    </div>
  );
}

export default postsIndex;
