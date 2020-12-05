import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	state = { term: '' };

	SubmitSearchTerm = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
		console.log(this.state.term);
	};
	render() {
		return (
			<div className='ui segment'>
				<div>
					<form onSubmit={this.SubmitSearchTerm} className='ui form' action=''>
						<div className='field'>
							<input
								value={this.state.term}
								type='text'
								onChange={(e) => this.setState({ term: e.target.value })}
								placeholder='Search'
							/>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
export default SearchBar;
