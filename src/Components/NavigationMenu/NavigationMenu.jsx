import React from 'react';
import "./NavigationMenu.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faHome);
library.add(faCompass);
library.add(faTv);
library.add(faUser);

class NavigationMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuItemObjects: [
			{
				title: "Home",
				icon:  "home",
				link:  "#home",
			},
			{
				title: "Discover",
				icon:  "compass",
				link:  "#discover",
			},
			{
				title: "My Series",
				icon:  "tv",
				link:  "#myseries",
			},
			{
				title: "Profile",
				icon:  "user",
				link:  "#profile",
			},
			],
		}
	}

	render() {
		return(
				<ul className="NavigationMenu">
					{this.renderMenuItems()}
				</ul>
			);
	}

	renderMenuItems() {
		let menuItems = [];
		let counter = 0;
		for(let menuItemObject of this.state.menuItemObjects) {
			menuItems.push(
				<li 
				key={counter++} 
				className="NavigationMenu-item"
				>
					<a href={menuItemObject.link}>
					<FontAwesomeIcon 
					className="NavigationMenu-icon" 
					icon={menuItemObject.icon} />
						{menuItemObject.title}
					</a>

				</li>
				);
		}

		return (menuItems);
	}
}

export default NavigationMenu;