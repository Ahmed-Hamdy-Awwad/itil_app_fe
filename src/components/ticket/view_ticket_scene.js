import { Col } from "reactstrap";
import TicketCard from "./view_ticket";
import React, { Component } from "react";
import PageTitle from "../common/page_title";
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
				transitionName="TabsAnimation">
				<Col xm="12" sm="12" md="12" lg="12" xl="12">
					<PageTitle icon="pe-7s-ticket text-success" heading="View Tickets" />
				</Col>
				<Col xm="12" sm="12" md="12" lg="12" xl="12">
					<TicketCard />
				</Col>
			</ReactCSSTransitionGroup>
		);
	}
}

export default ViewTicketScene;
