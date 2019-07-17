import React from 'react';
import Button from '../Button';

function BlogPost ({title, author, post, index, handleDeletePost}) {
    return (
        <div className="card">
        <li>
            <h3>{title}</h3>
            <h5>{author}</h5>
            <h6>{post}</h6>
            <Button
            type={"Delete Slogan"} 
            index={index} 
            handleDeletePost={handleDeletePost}
            />
        </li>
        </div>
    )
}

export default BlogPost;

