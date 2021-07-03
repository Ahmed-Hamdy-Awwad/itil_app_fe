import React from "react";
import Login from "./login";
import Signup from "./signup";
import {Col, Row} from "reactstrap";
import PageTitle from "../common/PageTitle";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class LoginScene extends React.Component {
	constructor() {
		super();
		this.state = {
			hidden: true,
		};
	}

	switchForms = () => {
		this.setState({hidden: !this.state.hidden});
	};

	render() {
		return (
			<ReactCSSTransitionGroup
				component="div"
				transitionAppear={true}
				transitionEnter={false}
				transitionLeave={false}
				transitionAppearTimeout={0}
				transitionName="TabsAnimation">
				<Row style={{justifyContent: "center", marginTop: "150px"}}>
					<Col xm="12" sm="12" md="12" lg="6" xl="6">
						<PageTitle
							icon="pe-7s-headphones"
							heading="Reliance IT Technical Support"
							subheading="We help you to make your digital life easier"
						/>
						<Login switchforms={this.switchForms} hidden={!this.state.hidden} />
						<Signup switchforms={this.switchForms} hidden={this.state.hidden} />
					</Col>
				</Row>
			</ReactCSSTransitionGroup>
		);
	}
}
