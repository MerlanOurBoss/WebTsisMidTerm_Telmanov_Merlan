import React from 'react';
import { Link } from 'react-router-dom';
import './Tweet.css';

function Tweet({ id, text, image, likes, dislikes, handlelike, handledislike }) {
    console.log("Post text:", text);

    return (
        <div className="tweet">
            <Link to={`/post/${id}`}>
                <h4 >{text}</h4>
                {image && <img src={image} alt="Image" />}
            </Link>
            <div>
                <span>Likes: {likes}</span>
                <button onClick={() => handlelike(id)}>Like</button>
                <span>Dislikes: {dislikes}</span>
                <button onClick={() => handledislike(id)}>Dislike</button>
            </div>
        </div>
    );
}

export default Tweet;
