import axios from "axios";
import React, {Fragment} from "react";
import PageTitle from "../common/PageTitle";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {Col, Row, Card, CardBody, Button, Form, FormGroup, Label, Input, FormFeedback} from "reactstrap";

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
			validation: {email: [false, ""]},
		};
	}

	handleChange = (e) => {
		let state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	};

	login = () => {
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
							<Card className="main-card">
								<CardBody>
									<Form onSubmit={this.login}>
										<Row form>
											<Col xm="6" sm="6" md="6" lg="6" xl="6">
												<FormGroup>
													<Label for="username">User Name</Label>
													<Input id="username" name="username" onChange={this.handleChange} />
													<FormFeedback>Please enter a user name.</FormFeedback>
												</FormGroup>
											</Col>
											<Col xm="6" sm="6" md="6" lg="6" xl="6">
												<FormGroup>
													<Label for="password">Password</Label>
													<Input
														id="password"
														type="password"
														name="password"
														onChange={this.handleChange}
													/>
													<FormFeedback>Please enter a password.</FormFeedback>
												</FormGroup>
											</Col>
										</Row>
										<Button color="success" className="mt-2" onClick={this.login}>
											Sign in
										</Button>
										<Button color="dark" className="mt-2 ml-2">
											Create New Account
										</Button>
									</Form>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</ReactCSSTransitionGroup>
			</Fragment>
		);
	}
}
