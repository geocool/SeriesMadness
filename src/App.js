import React, { Component } from 'react';
import './App.css';

import Navigation from "./Components/Navigation/Navigation.jsx";
import MobileMenu from "./Components/MobileMenu/MobileMenu.jsx";
import MobileSearchResults from "./Components/MobileSearchResults/MobileSearchResults.jsx";
import FeaturedSeries from "./Components/FeaturedSeries/FeaturedSeries.jsx";
import PopularSeries from "./Components/PopularSeries/PopularSeries.jsx";

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		isMobileMenuOpen: false,
		isMobileSearchOpen: false,
  	};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation 
          isMobileMenuOpen={this.state.isMobileMenuOpen} 
          isMobileSearchOpen={this.state.isMobileSearchOpen}
          onMenuClick={() => this.handleMobileMenuClick()} 
          onSearchClick={() => this.handleMobileSearchClick()}
          />
        </header>
        <MobileMenu isOpen={this.state.isMobileMenuOpen}/>
        <MobileSearchResults isOpen={this.state.isMobileSearchOpen} />

        <FeaturedSeries />
        <PopularSeries />
      </div>
    );
  }

	handleMobileMenuClick() {
		if(this.state.isMobileMenuOpen) {
			this.setState({isMobileMenuOpen:false})
		} else if (this.state.isMobileSearchOpen) {
			this.setState({isMobileSearchOpen:false})
		} else {
			this.setState({isMobileMenuOpen:true})
		}
	}

	handleMobileSearchClick() {
		if(!this.state.isMobileSearchOpen) {
			this.setState({isMobileSearchOpen:true})
		}
	}
}

export default App;
