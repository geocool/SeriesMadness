import React from "react";
import "./Carousel.css";
import CarouselCard from "../CarouselCard/CarouselCard.jsx";

import theBigBangTheoryCover from "../../media/images/slider-card1.png";
import gameOfThronesCover from "../../media/images/slider-card2.png";
import theWalkingDeadCover from "../../media/images/slider-card3.png";

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: [
			{
				title:"The Big Bang Theory",
			    followers:"232.406",
			    genre:"Comedy",
			    cover: theBigBangTheoryCover,
			},
			{
				title:"Game Of Thrones",
				followers:"352.692",
				genre:"Fantasy/Drama",
				cover: gameOfThronesCover,
			},
			{
				title:"The Walking Dead",
				followers:"204.255",
				genre:"Horror",
				cover: theWalkingDeadCover,
			},
			]
		}
	}

	render() {
		return(
			<div className="Carousel">
				{this.renderCards()}
			</div>
			);
	}

	renderCards() {
		let cards = [];
		let key = 0;
		for(let card of this.state.cards) {
			cards.push(<CarouselCard key={key++} title={card.title} followers={card.followers} genre={card.genre} cover={card.cover} />)
		}

		return cards;
	}
}

export default Carousel;