import axios from "axios";
import Login from "./login";
import Signup from "./signup";
import {Col, Row} from "reactstrap";
import React, {Fragment} from "react";
import PageTitle from "../common/PageTitle";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default class LoginScene extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			username: "",
			password: "",
			hidden: true,
		};
	}

	handleChange = (e) => {
		let state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	};

	login = () => {
		console.log(this.state);
		axios
			.post(`http://localhost:8000/login`, {username: this.state.username, password: this.state.password})
			.then((res) => {
				console.log(res.data);
				localStorage.setItem("token", res.data.token);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	};

	signup = () => {
		this.setState({hidden: !this.state.hidden});
	};

	render() {
		return (
			<Fragment>
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
							<Login
								login={this.login}
								signup={this.signup}
								hidden={!this.state.hidden}
								handlechange={this.handleChange}
							/>
							<Signup
								login={this.login}
								signup={this.signup}
								hidden={this.state.hidden}
								handlechange={this.handleChange}
							/>
						</Col>
					</Row>
				</ReactCSSTransitionGroup>
			</Fragment>
		);
	}
}
