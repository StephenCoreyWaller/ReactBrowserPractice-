import React from 'react';
import './App.css';
import SearchBar from './componets/SearchBar';
import Connection from './AxiosConnections/YouTubeConnection';
import VideoList from './componets/VideoList';
import VideoDetails from './componets/VideoDetails';

class App extends React.Component {
	state = { searchTerm: '', videos: [], selectedVideo: null };
	SearchFunction = async (term) => {
		this.setState({ searchTerm: term });
		const result = await Connection.get('/search', {
			params: {
				q: this.state.searchTerm,
			},
		});
		this.setState({
			videos: result.data.items,
			selectedVideo: result.data.items[0],
		});
	};
	onSelectVideo = (video) => {
		this.setState({ selectedVideo: video });
	};
	componentDidMount() {
		this.SearchFunction('cats');
	}

	render() {
		return (
			<div className='ui container'>
				<SearchBar onSubmit={this.SearchFunction} />
				<div className='ui grid'>
					<div className='ui row'>
						<div className='eleven wide column'>
							<VideoDetails video={this.state.selectedVideo} />
						</div>
						<div className='five wide column'>
							<VideoList
								onSelectVideo={this.onSelectVideo}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
