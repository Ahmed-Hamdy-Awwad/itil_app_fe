import cx from "classnames";
import React, {Component} from "react";
import Nav from "./vertical_nav_wrapper";
import PerfectScrollbar from "react-perfect-scrollbar";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class AppSidebar extends Component {
	render() {
		return (
			<ReactCSSTransitionGroup
				component="div"
				transitionAppear={true}
				transitionEnter={false}
				transitionLeave={false}
				transitionAppearTimeout={1500}
				transitionName="SidebarAnimation"
				className={cx("app-sidebar bg-premium-dark-sb sidebar-text-light", {"sidebar-shadow": true})}>
				<PerfectScrollbar>
					<div className="app-sidebar__inner">
						<Nav />
					</div>
				</PerfectScrollbar>
			</ReactCSSTransitionGroup>
		);
	}
}

export default AppSidebar;
