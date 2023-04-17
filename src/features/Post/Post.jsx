import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import shortenNumber from '../../utils/shortenNumber';
import Card from '../../components/Card/Card';
import Comment from '../Comment/Comment';

const Post = (props) => {
    const [voteValue, setVoteValue] = useState(0);
    const { post, onToggleComments} = props;

    const onHandleVote = (newvalue) => {
        if (newvalue === voteValue) {
            setVoteValue(0)
        } else if (newvalue === 1) {
            setVoteValue(1);
        } else {
            setVoteValue(-1)
        }
    };

    const renderUpVote = () => {
        if (voteValue === 1) {
            return <i class="fa-solid fa-arrow-up"></i>
        }
        return <i class="fa-regular fa-arrow-up"></i>
    }
    const renderDownVote = () => {
        if (voteValue === -1) {
            return <i class="fa-solid fa-arrow-down"></i>
        }
        return <i class="fa-regular fa-arrow-down"></i>
    }


    const getVoteType = () => {
        if (voteValue === 1) {
            return 'up-vote';
        }
        if (voteValue === -1) {
            return 'down-vote'
        }

        return '';
    }

    const renderComments = () => {
        if (post.errorComments) {
            return (
                <div>
                    <h3>Error loading comments</h3>
                </div>
            );
        }

        if (post.loadingComments) {
            return (
                <div>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                    <Skeleton/>
                </div>
            );
        }

        if (post.showingComments) {
            return (
                <div>
                    {post.comments.map((comment) => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
            );
        }

        return null;
    }

    return (
        <article key={post.id}>
            <Card>
                <div className="post__wrapper">
                    <div className="postVotes__container">
                        <button
                            type="button"
                            className={`icon-action-btn up-vote ${voteValue === 1 && 'active'}`}
                            onClick={onHandleVote(1)}
                            aria-label='Up vote'
                        >
                            {renderUpVote()}
                        </button>
                        <p className={`post-votes-value ${getVoteType()}`}>
                        {shortenNumber(post.ups, 1)}
                        </p>
                        <button
                            type="button"
                            className={`icon-action-btn down-vote ${voteValue === -1 && 'active'}`}
                            onClick={onHandleVote(-1)}
                            aria-label='Down vote'
                        >
                            {renderDownVote()}
                        </button>
                    </div>
                    <div className="post__container">
                    <h3 className="post__title">{post.title}</h3>
                        <div className="post__imageContainer">
                            <img src={post.url} alt="" className="post__image"/>
                        </div>
                        <div className="post__details">
                            <p className="author-username">
                                {post.author}
                            </p>
                            <span>{moment.unix(post.created_utc).fromNow()}</span>
                            <span className="post__commentsContaniner">
                                <button
                                  type="button"
                                  className={`icon-action-btn ${post.showingComments && 'showing-comments'}`}
                                  onClick={() => onToggleComments(post.permalink)}
                                  aria-label="Show comments"
                                >
                                    <i className="fa-solid fa-comment"></i>
                                </button>
                                {shortenNumber(post.num_comments, 1)}
                            </span>
                        </div>
                        {renderComments}
                    </div>
                </div>
            </Card>
        </article>
    );
};

export default Post;