import axios from "axios";
import React from "react";
import {Col, Row, Card, CardBody, Button, Form, FormGroup, Label, Input, FormFeedback} from "reactstrap";

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			data: {},
			validation: {},
		};
	}

	setValidation = (e, validity) => {
		e.preventDefault();
		let validation = this.state.validation;
		validation[e.target.name] = {validity: validity, feedBackMessage: e.target.validationMessage};
		this.setState({validation: validation});
	};

	handleChange = (e) => {
		let data = this.state.data;
		data[e.target.name] = e.target.value;
		this.setState({data: data});
	};

	login = (e) => {
		e.preventDefault();
		axios
			.post(`login`, this.state.data)
			.then((res) => {
				localStorage.setItem("token", res.data.token);
			})
			.catch((err) => {
				if (err.response.data.non_field_errors) {
					let validation = this.state.validation;
					validation.username = {validity: true, feedBackMessage: err.response.data.non_field_errors[0]};
					validation.password = {validity: true, feedBackMessage: err.response.data.non_field_errors[0]};
					this.setState({validation: validation});
				} else console.log(err.response.data);
			});
	};

	render() {
		return (
			<Card className="main-card" hidden={this.props.hidden}>
				<CardBody>
					<Form
						onSubmit={this.login}
						onInvalid={(e) => {
							this.setValidation(e, true);
						}}>
						<Row form>
							<Col xm="12" sm="12" md="6" lg="6" xl="6">
								<FormGroup>
									<Label for="username">User Name</Label>
									<Input
										required
										id="username"
										name="username"
										onChange={this.handleChange}
										onInput={(e) => {
											this.setValidation(e, false);
										}}
										invalid={this.state.validation.username ? this.state.validation.username.validity : false}
									/>
									<FormFeedback
										invalid={
											this.state.validation.username
												? toString(this.state.validation.username.validity)
												: "false"
										}>
										{this.state.validation.username ? this.state.validation.username.feedBackMessage : ""}
									</FormFeedback>
								</FormGroup>
							</Col>
							<Col xm="12" sm="12" md="6" lg="6" xl="6">
								<FormGroup>
									<Label for="password">Password</Label>
									<Input
										required
										id="password"
										type="password"
										name="password"
										onChange={this.handleChange}
										onInput={(e) => {
											this.setValidation(e, false);
										}}
										invalid={this.state.validation.password ? this.state.validation.password.validity : false}
									/>
									<FormFeedback
										invalid={
											this.state.validation.password
												? toString(this.state.validation.password.validity)
												: "false"
										}>
										{this.state.validation.password ? this.state.validation.password.feedBackMessage : ""}
									</FormFeedback>
								</FormGroup>
							</Col>
						</Row>
						<Button color="success" className="mt-2" type="submit">
							Sign in
						</Button>
						<Button color="dark" className="mt-2 ml-2" onClick={this.props.switchforms}>
							Create Account
						</Button>
					</Form>
				</CardBody>
			</Card>
		);
	}
}
