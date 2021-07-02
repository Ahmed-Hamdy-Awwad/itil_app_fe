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
			nameValidation: {phrase: "", validity: null},
			passwordValidation: {phrase: "", validity: null},
			credentialsValidation: {phrase: "", validity: true},
		};
	}

	handleChange = (e) => {
		let state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	};

	login = () => {
		if (!this.state.hidden) {
			this.setState({hidden: !this.state.hidden});
			return;
		}
		axios
			.post(`login`, {username: this.state.username, password: this.state.password})
			.then((res) => {
				localStorage.setItem("token", res.data.token);
			})
			.catch((err) => {
				let validation = err.response.data;
				if (validation.username) {
					this.setState({nameValidation: {phrase: validation.username[0], validity: true}});
				} else this.setState({nameValidation: {phrase: "", validity: false}});
				if (validation.password) {
					this.setState({passwordValidation: {phrase: validation.password[0], validity: true}});
				} else this.setState({passwordValidation: {phrase: "", validity: false}});
				if (validation.non_field_errors) {
					this.setState({
						credentialsValidation: {phrase: validation.non_field_errors[0], validity: false},
					});
				} else
					this.setState({
						credentialsValidation: {phrase: "", validity: true},
					});
			});
	};

	signup = () => {
		if (this.state.hidden) {
			this.setState({hidden: !this.state.hidden});
			return;
		}
		axios
			.post(`signup`, {username: this.state.username, password: this.state.password, email: this.state.email})
			.then((res) => {
				console.log(res.data);
				localStorage.setItem("token", res.data.token);
			})
			.catch((err) => {
				console.log(err.response.data);
			});
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
								namevalidation={this.state.nameValidation}
								passwordvalidation={this.state.passwordValidation}
								credentialsvalidation={this.state.credentialsValidation}
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
