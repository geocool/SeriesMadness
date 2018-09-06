import React from 'react';
import "./MobileMenu.css";

class MobileMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menuItemNames: [
				"Home",
				"Discover",
				"My Series",
				"Settings",
				"Logout",
			],
		}
	}

	render() {
		return(
				<ul className="MobileMenu" isopen={this.props.isOpen.toString()}>
					{this.renderMenuItems()}
				</ul>
			);
	}

	renderMenuItems() {
		let menuItems = [];
		let counter = 0;
		for(let menuItemName of this.state.menuItemNames) {
			menuItems.push(<li key={counter++} className="MobileMenu-item">{menuItemName}</li>);
		}

		return (menuItems);
	}
}

export default MobileMenu;