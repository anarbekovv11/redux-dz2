import {Link} from "react-router-dom";


export function Photo({post}) {
    return (
        <>
            <li>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
        </>
    );
}