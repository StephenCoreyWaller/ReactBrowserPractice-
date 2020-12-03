import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	state = { term: '' };

	SubmitSearchTerm = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
		this.setState({ term: '' });
	};

	render() {
		return (
			<div className='ui segment'>
				<div>
					<form onSubmit={this.SubmitSearchTerm} className='ui input' action=''>
						<input
							value={this.state.term}
							type='text'
							onChange={(e) => this.setState({ term: e.target.value })}
							placeholder='Search'
						/>
					</form>
				</div>
			</div>
		);
	}
}
export default SearchBar;
