import React from "react";
//import $ from 'jquery'; 
import "./FeaturedSeries.css"
import Carousel from "../Carousel/Carousel.jsx";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretLeft);
library.add(faCaretRight);

class FeaturedSeries extends React.Component {
	render () {
		return (
			<section className="FeaturedSeries">
				<Carousel />
				<div className="FeaturedSeries-leftArrow">
					<FontAwesomeIcon icon="caret-left" />
				</div>
				<div className="FeaturedSeries-rightArrow">
					<FontAwesomeIcon icon="caret-right" />
				</div>
			</section>
			); 
	}
}

export default FeaturedSeries;