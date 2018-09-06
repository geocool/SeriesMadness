import React from 'react';

import NavigationMenu from "../NavigationMenu/NavigationMenu.jsx";
import SearchInput from "../SearchInput/SearchInput.jsx";

import logo from "../../media/images/logo.png";
import "./Navigation.css";
import burgerMenu from "../../media/images/menu.svg";
import burgerMenuClose from "../../media/images/menu-close.svg";
import search from "../../media/images/search-mobile.svg";

class Navigation extends React.Component {
	render() {
		return (
			<nav className="Navigation">
				<img 
				src={this.props.isMobileMenuOpen || this.props.isMobileSearchOpen ? burgerMenuClose : burgerMenu} 
				className="Navigation-burgerMenu" 
				alt="Mobile Menu" 
				onClick={() => this.props.onMenuClick()} 
				/>
				<div className="Navigation-leftContent" isopen={this.props.isMobileSearchOpen.toString()}>
					<img src={logo} alt="Logo" className="Navigation-logo" />
					<SearchInput placeholder="Search TV Series" isOpen={this.props.isMobileSearchOpen}/>
				</div>
				<NavigationMenu />
				<img 
				src={search} 
				className="Navigation-mobileSearch" 
				alt="Mobile Menu" 
				isopen={this.props.isMobileSearchOpen.toString()} 
				onClick={() => this.props.onSearchClick()}
				/>
			</nav>
			);
	}
}

export default Navigation;