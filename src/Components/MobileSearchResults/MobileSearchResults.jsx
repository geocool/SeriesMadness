import React from 'react';
import "./MobileSearchResults.css";

class MobileSearchResults extends React.Component {

	render() {
		return(
				<section className="MobileSearchResults" isopen={this.props.isOpen.toString()}>
					<h2 className="MobileSearchResults-header">No Search Terms</h2>
					<span className="MobileSearchResults-subheader">Enter the title of a TV Series</span>
				</section>
			);
	}
}

export default MobileSearchResults;