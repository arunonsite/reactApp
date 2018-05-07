import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';
const API_KEY ='AIzaSyBRhtCxGt3IxdlEX0KHT0KM5P5Abevys9g';



class App extends Component{
    constructor(props){
        super(props);
        this.state = {videos: []};
        YTSearch({Key: API_KEY,term: 'vijay'},(videos) =>{
            this.setState({ videos });
            //this.setState({ videos : videos});
            });
    }

    render(){
        return (
            <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
    </div>
        );
    }
    
}



// Components generate to HTML to the page (DOM)

ReactDOM.render(<App />,document.querySelector('.container'));