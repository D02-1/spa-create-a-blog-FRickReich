import React  from 'react';
import Moment from 'react-moment';
import { useNavigate } from "react-router-dom";

import './Post.scss';

const Post = ({ content }) =>
{
    const navigate = useNavigate();

    return(
        <div className="Post">
            <h4 className="title" onClick={ () => navigate(`/post/show/${ content.id }`) }>
                { content.title }
            </h4>
            <div className="author">
                von { content.author } -&nbsp;
                <Moment fromNow>{content.date}</Moment>
            </div>
            <div className="text">{ content.content }</div>
        </div>
    );
}

export default Post;
