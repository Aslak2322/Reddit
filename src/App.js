import logo from './logo.svg';
import './App.css';
import SearchBarComponent from './searchBar';
import Postlist from './postList';
import Subreddit from './subReddit';
import { useState } from 'react';

function App() {
  const [selectedSubreddit, setSelectedSubreddit] = useState(null)

  const handleSelectSubreddit = (sub) => {
    setSelectedSubreddit(sub);
    console.log('Selected subreddit:', selectedSubreddit);
  }

  return (
    <div className="App">
      <header>
       <h2>Reddit</h2>
       <SearchBarComponent />
       <div className='flex-container'>
        <div>
          <h1>Posts</h1>
           <Postlist selectedSubreddit={selectedSubreddit}/>
        </div>
        <div>
          <h1>Subreddits</h1>
           <Subreddit onSelectSubreddit={handleSelectSubreddit} />
        </div>
       </div>
    </header>
    </div>
  );
}

export default App;
