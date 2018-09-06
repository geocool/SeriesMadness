import React from "react";
import "./PopularSeries.css"
import PopularSeriesContainer from "../PopularSeriesContainer/PopularSeriesContainer.jsx";
import popularSeriesIcon from "../../media/images/popular.svg";

class PopularSeries extends React.Component {
	render() {
		return(
			<section className="PopularSeries">
				<div className="PopularSeries-headerBox">
					<img className="PopularSeries-icon" src={popularSeriesIcon} alt="Popular Series"/> 
					<div className="PopularSeries-header">
						<h2 className="PopularSeries-title">Popular Series</h2>
						<span className="PopularSeries-subtitle">Based on followers</span>
					</div>

				</div>
				<PopularSeriesContainer />
			</section>
			);
	}
}

export default PopularSeries;