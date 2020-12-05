import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelectVideo }) => {
	const videosList = videos.map((x) => {
		return (
			<VideoItem onSelectVideo={onSelectVideo} key={x.id.videoId} video={x} />
		);
	});
	return <div className='ui relaxed divided list'>{videosList}</div>;
};
export default VideoList;
