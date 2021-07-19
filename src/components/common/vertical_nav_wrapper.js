import React, {Component} from "react";
import MetisMenu from "react-metismenu";
import {ComponentsNav} from "./nav_items";

class Nav extends Component {
	render() {
		return (
			<MetisMenu
				iconNamePrefix=""
				activeLinkFromLocation
				content={ComponentsNav}
				className="vertical-nav-menu"
				classNameStateIcon="pe-7s-angle-down"
			/>
		);
	}
}

export default Nav;
