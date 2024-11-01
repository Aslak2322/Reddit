import { useState } from 'react';
import './subReddit.css';

function Subreddit( {onSelectSubreddit, selectedSubreddit} ) {

    const [subReddit, setSubReddit] = useState([
        {id: 1, title: 'r/learnprogramming'},
        {id: 2, title: 'r/javascript'},
        {id: 3, title: 'Psychiatry'}
    ]);
    const [searchSubreddit, setSearchSubreddit] = useState('')

    const addSubreddit = () => {
        const newSubreddit = { id: subReddit.length + 1, title: [searchSubreddit]}
        setSubReddit([...subReddit, newSubreddit])
    }

    const handleSearch = (e) => {
        setSearchSubreddit(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addSubreddit();
        }
    }

    const clearSubreddit = () => {
        setSubReddit([])
    }

    const showSelectedSubreddit = () => {
        if (selectedSubreddit) {
            return selectedSubreddit.title
        }
        else {
            return 'No subreddit selected'
        }
    }


    return(
        <div className='subreddit'>
            <input type='text' onChange={handleSearch} value={searchSubreddit} onKeyDown={handleKeyPress} />
            <h1>Current Subreddit:{` ${showSelectedSubreddit()}`}</h1>
            <button onClick={clearSubreddit}>Clear</button>
            <ul>
                {subReddit.map(sub => (
                    <li key={sub.id} onClick={() => onSelectSubreddit(sub)} style={{ cursor: 'pointer' }}>{sub.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Subreddit;