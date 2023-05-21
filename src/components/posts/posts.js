import React, {useEffect, useState} from 'react';
import axios from "axios"

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response);
        const data = await response.data
        console.log(data)
        setPosts(data)
    }
    useEffect(() => {
        getPosts()
    }, [])
    console.log(posts)
    return (
        <div>
            Posts
            <ul>
                {
                    posts.map(({id, title}) => {
                        return <li key={id}>
                            {title}
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Posts;