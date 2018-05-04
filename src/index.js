import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
// create components
const App =  () => {
    return (
    <div>
        <SearchBar />
    </div>
    ); 
}

// Components generate to HTML to the page (DOM)

ReactDOM.render(<App />,document.querySelector('.container'));