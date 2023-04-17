import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { fetchSubreddits, selectSubreddits } from "../store/subRedditSlice";
import { selectSelectedSubreddit, setSelectedSubreddit } from "../store/redditSlice";


const Subreddits = () => {
    const dispatch = useDispatch();
    const subreddits = useSelector(selectSubreddits)
    const selectedSubreddit = useSelector(selectSelectedSubreddit)

    useEffect(() => {
        dispatch((fetchSubreddits));
    }, [dispatch])

    return (
        <div className="subbreditCard">
            <h2>Subreddits</h2>
            <ul className="subbredditsList">
                {subreddits.map((subreddit) => (
                    <li
                        key={subreddit.id}
                        className={`${selectedSubreddit === subreddit.url && `selected-subreddit` }`}
                    >
                        <button
                            type="button"
                            onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                        >
                         <img 
                            src={
                                subreddit.icon_img ||
                                subreddit.icon_img ||
                                `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                            }
                            alt={`${subreddit.display_name}`}
                            className="subreddit-icon"
                            style={{ border: '3px solid #1FC561'}}
                         />
                         {subreddit.display_name}   
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Subreddits;