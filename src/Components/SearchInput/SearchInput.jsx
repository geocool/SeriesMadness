import React from "react";
import "./SearchInput.css";
import icon from "../../media/images/search.svg";

class SearchInput extends React.Component {
	render() {
		return(
			<form className="SearchInput" isopen={this.props.isOpen.toString()}>
				<input 
				type="text" 
				placeholder={this.props.placeholder} 
				className="SearchInput-input" 
				/>
				<button className="SearchInput-button" type="submit">
					<img className="SearchInput-icon" src={icon} alt="Search" />
				</button>
			</form>
			);
	}
}

export default SearchInput;