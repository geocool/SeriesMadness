import React from "react"

class WelcomeModal extends React.Component {
	render() {
		<div className="WelcomeModal">
			<h3>Hello Visitor!</h3>
			<p>I created this small project to demonstrate my front end skills. <br />
				I created a mockup in Adobe Illustrator and then I code it.
			</p>
			<ul>
				<li>I used HTML5,CSS3,Javascript ES6 & React Framework</li>
				<li>The page is responsive and uses mobile first approach</li>
				<li>It has 3 width breakpoints (600,900,1200)</li>
				<li>I use ajax requests for data from my backend (nodejs/mongoDB)</li>
			</ul>
			<p>
			You can view the source of this page here: <a href="">Github</a> <br />
			Don't forget to check out the mobile version of the page!
			</p>
		</div>
	}
}