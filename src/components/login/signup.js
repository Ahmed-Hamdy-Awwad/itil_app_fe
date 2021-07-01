import React from "react";
import {Col, Row, Card, CardBody, Button, Form, FormGroup, Label, Input, FormFeedback} from "reactstrap";

export default class Signup extends React.Component {
	render() {
		return (
			<Card className="main-card" hidden={this.props.hidden}>
				<CardBody>
					<Form onSubmit={this.props.signup}>
						<Row form>
							<Col xm="6" sm="6" md="6" lg="6" xl="6">
								<FormGroup>
									<Label for="username">User Name</Label>
									<Input id="username" name="username" onChange={this.props.handlechange} />
									<FormFeedback>Please enter a user name.</FormFeedback>
								</FormGroup>
							</Col>
							<Col xm="6" sm="6" md="6" lg="6" xl="6">
								<FormGroup>
									<Label for="password">Password</Label>
									<Input id="password" type="password" name="password" onChange={this.props.handlechange} />
									<FormFeedback>Please enter a password.</FormFeedback>
								</FormGroup>
							</Col>
							<Col xm="6" sm="6" md="6" lg="6" xl="6">
								<FormGroup>
									<Label for="email">Email</Label>
									<Input id="email" type="email" name="email" onChange={this.props.handlechange} />
									<FormFeedback>Please enter an email.</FormFeedback>
								</FormGroup>
							</Col>
						</Row>
						<Button color="success" className="mt-2" onClick={this.props.login}>
							Sign in
						</Button>
						<Button color="dark" className="mt-2 ml-2" onClick={this.props.signup}>
							Submit
						</Button>
					</Form>
				</CardBody>
			</Card>
		);
	}
}
