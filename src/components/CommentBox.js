import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const CommentBox = () => {

    const [comment, setComment] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        actions.saveComment(comment);
        setComment("");
    }

    return (
    <div>
    <form onSubmit={handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={comment} onChange={(e) => setComment(e.target.value) }/>
        <div>
            <button>Submit</button>
        </div>
    </form>
    <button className="fetch-comments" onClick={actions.fetchComments}>Fetch comments</button>
    </div>
    )
};

export default connect(null, actions)(CommentBox);