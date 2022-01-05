import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CreatePost = () =>
{
    const navigate = useNavigate();

    const [ postValues, setPostValues ] = useState({
        author: '',
        date: Date.now(),
        title: '',
        content: '',
        id: Math.random().toString(16).substr(2, 8)
    });

    const handleInputChange = (e) =>
    {
        setPostValues({ ...postValues, [ e.target.name ]: e.target.value });
    }

    const handleSubmit = (e) =>
    {
        let posts = JSON.parse(localStorage.getItem('posts'));

        if(posts)
        {
            posts.push({...postValues});
        }
        else
        {
            posts = [{...postValues}];
        }

        localStorage.setItem('posts', JSON.stringify(posts));

        navigate(`/post/show/${ postValues.id }`)
    }

    return(
        <div>
            <div className="editor">

                <input
                    type="text"
                    name="author"
                    placeholder="Verfasser"
                    onChange={ handleInputChange }
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Titel"
                    onChange={ handleInputChange }
                />
                <textarea
                    name="content"
                    placeholder="Text..."
                    onChange={ handleInputChange }
                    rows="10"
                ></textarea>

                <button onClick={ (e) => handleSubmit(e) }>Abschicken</button>
            </div>
        </div>
    );
}

export default CreatePost;
