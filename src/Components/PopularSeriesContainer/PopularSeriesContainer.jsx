import React from "react";
import "./PopularSeriesContainer.css";
import PopularSeriesItem from "../PopularSeriesItem/PopularSeriesItem.jsx";

class PopularSeriesContainer extends React.Component {
	render() {
		return (
			<div className="PopularSeriesContainer">
				{this.renderSeriesItems()}
			</div>
			);
	}

	renderSeriesItems() {
		let seriesItems = [];
		for(let i=0; i<20; i++) {
			seriesItems.push(<PopularSeriesItem key={i} order={i+1} />);
		}
		return seriesItems;
	}
}

export default PopularSeriesContainer;