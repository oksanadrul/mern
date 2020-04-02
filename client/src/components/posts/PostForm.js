import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../../actions/post'

const PostForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch()

  const sendPost = e => {
    e.preventDefault();
    dispatch(addPost({ text }));
    setText('');
  }
  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>Say Something...</h3>
      </div>
      <form className="form my-1" onSubmit={(e => sendPost(e))}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={e => setText(e.target.value)}
          required
        ></textarea>
        <input type="submit" className="btn btn-dark my-1" value="Submit" />
      </form>
    </div >
  )
}

export default PostForm;
