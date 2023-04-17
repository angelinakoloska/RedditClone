import React from "react";
import moment from "moment";
import ReactMarkdom from 'react-markdown';

const Comment = (props) => {
    const { comment } = props;

    return (
        <div className="comment">
            <div className="comment-metdata">
                <p className="comment-author">{comment.author}</p>
                <p className="comment-created-time">
                    {moment.unix(comment.created_utc).fromNow()}
                </p>
            </div>
            <ReactMarkdom source={comment.body}/>
        </div>
    )
}

export default Comment;