import React from "react";
import "./PopularSeriesItem.css";

import coverImage from "../../media/images/covers/DoctorWho.png";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

library.add(faBookmark);

class PopularSeriesItem extends React.Component {
	render() {
		return (
			<div className="PopularSeriesItem">
				<div className="PopularSeriesItem-coverbox">
					<img className="PopularSeriesItem-cover" src={coverImage} alt="Series Cover" />
					<div className="PopularSeriesItem-ribbonBox">
						<FontAwesomeIcon className="PopularSeriesItem-ribbon" icon="bookmark" />
						<div className="PopularSeriesItem-ribbonNumber">{this.props.order}</div>
					</div>
				</div>
				<div className="PopularSeriesItem-info">
					<div className="PopularSeriesItem-title">Doctor Who</div>
					<div className="PopularSeriesItem-followers">233.000 Followers</div>
				</div>
			</div>
		);
	}
}

export default PopularSeriesItem;