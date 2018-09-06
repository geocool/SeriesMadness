import React from "react";
import "./CarouselCard.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'

library.add(faUserFriends);

class CarouselCard extends React.Component {
	render() {
		return(
			<div className="CarouselCard">
				<div className="CarouselCard-background">
					<img className="CarouselCard-cover" alt="Series Cover" src={this.props.cover} />
				</div>
				<div className="CarouselCard-content">
					<h2 className="CarouselCard-title">{this.props.title}</h2>
					<div className="CarouselCard-line"></div>
					<div className="CarouselCard-info">
						{this.renderFollowers()}
						 &#9679;
						{this.renderGenre()}
					</div>
				</div>
			</div>
			);
	}

	renderFollowers() {
		return (
			<div className="CarouselCard-followers">
				<FontAwesomeIcon className="CarouselCard-icon" icon="user-friends" />{this.props.followers} Followers
			</div>
			);
	}

	renderGenre() {
		return (
			<div className="CarouselCard-genre">
				{this.props.genre}
			</div>
			);
	}
}

export default CarouselCard;