import React from 'react';
import './App.css';
import SearchBar from './componets/SearchBar';
import VideoDetails from './componets/VideoDetails';
import Connection from './AxiosConnections/YouTubeConnection';

class App extends React.Component {
	state = { searchTerm: '', videos: [], mainVideo: '', details: null };
	SearchFunction = async (event) => {
		this.setState({ searchTerm: event });
		const result = await Connection.get('/search', {
			params: {
				q: this.state.searchTerm,
			},
		});
		this.setState({ videos: result.data.items });
		this.setState({
			mainVideo: this.state.videos[0].id.videoId,
			details: this.state.videos[0],
		});
	};

	render() {
		const details = this.state.mainVideo ? (
			<VideoDetails
				details={this.state.details}
				mainVideo={this.state.mainVideo}
			/>
		) : (
			<div></div>
		);

		return (
			<div className='ui container appDoc'>
				<SearchBar onSubmit={this.SearchFunction} />
				{details}
			</div>
		);
	}
}

export default App;
