import React from "react";
import NewTicket from "./new_ticket";
import { Col, Row } from "reactstrap";
import TicketCard from "./view_ticket";
import PageTitle from "../common/page_title";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class NewTicketScene extends React.Component {
	render() {
		return (
			<ReactCSSTransitionGroup
				component="div"
				transitionAppear={true}
				transitionEnter={false}
				transitionLeave={false}
				transitionAppearTimeout={0}
				transitionName="TabsAnimation">
				<Row>
					<Col xm="12" sm="12" md="12" lg="12" xl="12">
						<PageTitle icon="pe-7s-ticket text-success" heading="Create New Ticket" />
					</Col>
					<Col xm="12" sm="12" md="12" lg="12" xl="12">
						<NewTicket />
					</Col>
					<Col xm="12" sm="12" md="12" lg="12" xl="12" className="mt-2">
						<TicketCard />
					</Col>
				</Row>
			</ReactCSSTransitionGroup>
		);
	}
}
