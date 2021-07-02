import React from "react";
import {Col, Row, Card, CardBody, Button, Form, FormGroup, Label, Input, FormFeedback} from "reactstrap";

export default class Login extends React.Component {
	render() {
		return (
			<Card className="main-card" hidden={this.props.hidden}>
				<CardBody>
					<Form onSubmit={this.props.login}>
						<Row form style={{justifyContent: "center"}}>
							<Col xm="6" sm="6" md="6" lg="6" xl="6">
								<FormGroup>
									<Label for="username">User Name</Label>
									<Input
										id="username"
										name="username"
										onChange={this.props.handlechange}
										invalid={this.props.namevalidation.validity}
									/>
									<FormFeedback invalid={this.props.namevalidation.validity}>
										{this.props.namevalidation.phrase}
									</FormFeedback>
								</FormGroup>
							</Col>
							<Col xm="6" sm="6" md="6" lg="6" xl="6">
								<FormGroup>
									<Label for="password">Password</Label>
									<Input
										id="password"
										type="password"
										name="password"
										onChange={this.props.handlechange}
										invalid={this.props.passwordvalidation.validity}
									/>
									<FormFeedback invalid={this.props.passwordvalidation.validity}>
										{this.props.passwordvalidation.phrase}
									</FormFeedback>
								</FormGroup>
							</Col>
							<Col xm="4" sm="4" md="4" lg="4" xl="4" hidden={this.props.credentialsvalidation.validity}>
								<div
									role="alert"
									class="alert alert-danger fade show"
									hidden={this.props.credentialsvalidation.validity}>
									{this.props.credentialsvalidation.phrase}
								</div>
							</Col>
						</Row>
						<Button color="success" className="mt-2" onClick={this.props.login}>
							Sign in
						</Button>
						<Button color="dark" className="mt-2 ml-2" onClick={this.props.signup}>
							Create New Account
						</Button>
					</Form>
				</CardBody>
			</Card>
		);
	}
}
