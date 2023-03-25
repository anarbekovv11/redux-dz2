import React, {useState, useEffect} from 'react';
import {Photo} from "../hoc/Photo";

export default function Name(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <ul>
            {posts.slice(1, 10).map(post => <Photo post={post}/>)}
        </ul>
    );
}