import { useState } from 'react';
import './subReddit.css';

function Subreddit( {onSelectSubreddit} ) {

    const [subReddit, setSubReddit] = useState([
        {id: 1, title: 'r/learnprogramming'},
        {id: 2, title: 'r/javascript'},
        {id: 3, title: 'Psychiatry'}
    ]);

    const addSubreddit = () => {
        const newSubreddit = { id: subReddit.length + 1, title: `Subreddit ${subReddit.length + 1}`}
        setSubReddit([...subReddit, newSubreddit])
    }

    return(
        <div className='subreddit'>
          <button onClick={addSubreddit}>Add Subreddit</button>
            <ul>
                {subReddit.map(sub => (
                    <li key={sub.id} onClick={() => onSelectSubreddit(sub)} style={{ cursor: 'pointer' }}>{sub.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Subreddit;