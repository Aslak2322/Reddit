import './searchBar.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm, setPosts } from './redux/actions';


function SearchBarComponent() {
        const dispatch = useDispatch();
        const [inputValue, setInputValue] = useState('');

        const handleSearch = async () => {
            dispatch(setSearchTerm(inputValue))
            try {
                const response = await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(inputValue)}`)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                dispatch(setPosts(data.data.children.map(child => child.data)))
            
            } catch (error) {
                console.error('Error fetching posts:', error)
            }
        }
    return (
    <div className="search-container">
      <input type="text" placeholder="Search"  value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>

    </div>
    )
}
export default SearchBarComponent;