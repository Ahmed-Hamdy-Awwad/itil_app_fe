import React, {Fragment} from "react";
import PageTitle from "../common/PageTitle";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {Col, Row, Card, CardBody, Button, Form, FormGroup, Label, Input} from "reactstrap";

export default class Login extends React.Component {
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
								subheading="We help you ease your digital life"
							/>
							<Card className="main-card">
								<CardBody>
									<Form>
										<Row form>
											<Col xm="6" sm="6" md="6" lg="6" xl="6">
												<FormGroup>
													<Label for="email">Email</Label>
													<Input type="email" name="email" id="email" />
												</FormGroup>
											</Col>
											<Col xm="6" sm="6" md="6" lg="6" xl="6">
												<FormGroup>
													<Label for="password">Password</Label>
													<Input type="password" name="password" id="password" />
												</FormGroup>
											</Col>
										</Row>
										<Button color="success" className="mt-2">
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
