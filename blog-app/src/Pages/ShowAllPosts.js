import React, { useState, useEffect } from 'react';
import Post from '../Components/Post/Post';

const ShowAllPosts = () =>
{
    const [ posts, setPosts ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() =>
    {
        let data = JSON.parse(localStorage.getItem('posts'));

        if(data)
        {
            setPosts(data);
            setLoading(false);
        }
    }, []);

    return(
        <div>
            {
                !loading &&
                posts.map((post, i) =>
                {
                    return(
                        <Post key={ i } content={ post }/>
                    )
                })
            }
        </div>
    );
}

export default ShowAllPosts;
