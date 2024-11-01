import Post from './post';
import { useState } from 'react';
import './postList.css';
import { useSelector, useDispatch } from 'react-redux';
import { setPosts, clearPosts } from './redux/actions';


function Postlist({ selectedSubreddit }) {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts)

    const addPost = () => {
        const newPost = { id: posts.length + 1, title: `Post ${posts.length + 1}`}
        dispatch(setPosts([...posts, newPost]))
    }
    const handleClearPosts = () => {
        dispatch(clearPosts())
    }

    const filteredPosts = selectedSubreddit ? posts.filter(post => post.subreddit == selectedSubreddit.title) : posts;
    console.log(filteredPosts)
    console.log(posts)

    return (
        <div className='post-list'>
            <button onClick={handleClearPosts}>Clear</button>
            <ul>
                {filteredPosts.map(post => (
                    <div>
                      <li key={post.id}>
                        <h2>{post.title}</h2>
                        {post.thumbnail && post.thumbnail !== 'self' && (
                            <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: 'auto'}}/>
                        )}
                      </li>
                      
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Postlist;