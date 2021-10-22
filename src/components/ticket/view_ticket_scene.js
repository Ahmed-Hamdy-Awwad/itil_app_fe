import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class ViewTicketScene extends Component {
	render() {
		return (
			<ReactCSSTransitionGroup
				component="div"
				transitionAppear={true}
				transitionEnter={false}
				transitionLeave={false}
				transitionAppearTimeout={0}
				transitionName="TabsAnimation"></ReactCSSTransitionGroup>
		);
	}
}

export default ViewTicketScene;
