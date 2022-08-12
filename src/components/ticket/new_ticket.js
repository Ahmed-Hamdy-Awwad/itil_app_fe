import axios from "axios";
import React from "react";
import { Col, Row, Card, CardBody, Button, Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";

export default class NewTicket extends React.Component {
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
		validation[e.target.name] = { validity: validity, feedBackMessage: e.target.validationMessage };
		this.setState({ validation: validation });
	};

	handleChange = (e) => {
		let data = this.state.data;
		data[e.target.name] = e.target.value;
		this.setState({ data: data });
	};

	createTicket = (e) => {
		e.preventDefault();
		axios
			.post(`ticket/`, this.state.data)
			.then((res) => {
				if (res) window.location = "http://localhost:3000/#/viewticket";
			})
			.catch((err) => {
				if (err.response.data.non_field_errors) {
					let validation = this.state.validation;
					validation.username = { validity: true, feedBackMessage: err.response.data.non_field_errors[0] };
					validation.password = { validity: true, feedBackMessage: err.response.data.non_field_errors[0] };
					this.setState({ validation: validation });
				} else console.log(err.response.data);
			});
	};

	render() {
		return (
			<Card className="main-card" hidden={this.props.hidden}>
				<CardBody>
					<Form
						onSubmit={this.createTicket}
						onInvalid={(e) => {
							this.setValidation(e, true);
						}}>
						<Row form>
							<Col xm="12" sm="12" md="6" lg="6" xl="6">
								<FormGroup>
									<Label for="description">Description</Label>
									<Input
										required
										id="description"
										name="description"
										onChange={this.handleChange}
										onInput={(e) => {
											this.setValidation(e, false);
										}}
										invalid={this.state.validation.description ? this.state.validation.description.validity : false}
									/>
									<FormFeedback
										invalid={this.state.validation.description ? toString(this.state.validation.description.validity) : "false"}>
										{this.state.validation.description ? this.state.validation.description.feedBackMessage : ""}
									</FormFeedback>
								</FormGroup>
							</Col>
						</Row>
						<Button color="success" className="mt-2" type="submit">
							Submit
						</Button>
					</Form>
				</CardBody>
			</Card>
		);
	}
}
