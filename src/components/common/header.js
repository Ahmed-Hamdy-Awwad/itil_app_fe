import React from "react";
import cx from "classnames";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Header extends React.Component {
	render() {
		return (
			<ReactCSSTransitionGroup
				component="div"
				className={cx("app-header bg-premium-dark header-text-light", {
					"header-shadow": true,
				})}
				transitionAppear={true}
				transitionEnter={false}
				transitionLeave={false}
				transitionAppearTimeout={1500}
				transitionName="HeaderAnimation">
				<div className={cx("app-header__content", {"header-mobile-open": false})}></div>
			</ReactCSSTransitionGroup>
		);
	}
}

export default Header;
