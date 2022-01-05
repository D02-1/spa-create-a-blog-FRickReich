import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Post } from './../Components';

const ShowSinglePost = () =>
{
    const { id } = useParams(); 
    const [ post, setPost ] = useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect(() =>
    {
        let data = JSON.parse(localStorage.getItem('posts'));

        if(data)
        {
            data.filter((post, i) =>
            {
                if(post.id === id)
                {
                    setLoading(false);
                    setPost(post);
                }
            })
        }
    }, []);

    return(
        <div>
            {
                !loading &&
                (
                    <Post content={ post }/>
                )
            }
        </div>
    );
}

export default ShowSinglePost;
