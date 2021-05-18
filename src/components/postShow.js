import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions/index';

function postShow() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  let { id } = useParams();

  useEffect(() => {
    dispatch(fetchPost(id));
  }, []);

  const onClickDelete = () => {
    dispatch(deletePost(id)).then(() => {
      window.location.replace('/');
    });
  };

  if (!post) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Link to='/'>Back to Home</Link>
        <button
          className='btn btn-danger pull-xs-right'
          onClick={onClickDelete}
        >
          DELETE
        </button>
        <h3>{post.title}</h3>
        <h6>Categories : {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default postShow;
