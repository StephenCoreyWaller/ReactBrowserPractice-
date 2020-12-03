import React from 'react';
import ReactPlayer from 'react-player';

class VideoDetails extends React.Component {
	state = { videoPlay: '', details: null };
	componentDidMount() {
		this.setState({
			videoPlay: this.props.mainVideo,
			details: this.props.details,
		});
		console.log(this.state.videoPlay);
	}
	render() {
		const detail = this.state.details ? this.state.details.id.videoId : <div />;
		console.log(`https://www.youtube.com/watch?v=${this.state.videoPlay}`);
		const video = (
			<div>
				<div className='ui raised segment'>
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${this.state.videoPlay}`}
					/>
					<div style={{ marginTop: '10px' }}>{detail}</div>
				</div>
			</div>
		);
		return <div>{video}</div>;
	}
}
export default VideoDetails;
