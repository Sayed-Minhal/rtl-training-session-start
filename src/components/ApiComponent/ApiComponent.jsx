import { useState, useEffect } from "react";
import {getPosts} from '../../API/ApiUtils'


function ApiComponent() {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts()
            .then(result => {console.log(result.data); setPosts(result.data)})
            .catch(err=>console.log(err));
    },[]);
    return ( <div>
        <h1>API Component</h1>

        {posts && posts.slice(0,5).map(post => <div key={post.title}>{post.title}</div>)}
        
        </div> );
}

export default ApiComponent;