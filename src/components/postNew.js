import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPost } from '../actions/index';

function postNew() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');
  const [content, setContent] = useState('');

  const titleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const categorieOnChange = (e) => {
    setCategories(e.target.value);
  };

  const contentOnChange = (e) => {
    setContent(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title,
      categories,
      content,
    };
    dispatch(createPost(data)).then(() => {
      window.location.replace('/');
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h3>Create A New Post</h3>
        <div className='form-group'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            className='form-control'
            onChange={titleOnChange}
          />
        </div>

        <div className='form-group'>
          <label>Categories</label>
          <input
            type='text'
            name='categories'
            className='form-control'
            onChange={categorieOnChange}
          />
        </div>

        <div className='form-group'>
          <label>Content</label>
          <textarea
            type='text'
            name='content'
            className='form-control'
            onChange={contentOnChange}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Submit' />
        <Link to='/' className='btn btn-danger'>
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default postNew;
