import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GoToBack} from "../NavBar/GoToBack";

export function InnerPhoto() {
    const [post, setPost] = useState({});
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
    },[id])

    return (
        <>
            <GoToBack/>
            <img src={post?.url} alt=""/>
        </>
    );
}