import { Button } from "reactstrap";
import React, { Component } from "react";
import { Row, Col, Card, CardTitle } from "reactstrap";

class TicketCard extends Component {
	render() {
		return (
			<Row>
				<Col md="4">
					<Card className="mb-3 card-shadow-success border" body outline color="warning">
						<CardTitle>Special Title Treatment</CardTitle>
						<p>With supporting text below as a natural lead-in to additional content.</p>
						<Button outline color="warning">
							Details
						</Button>
					</Card>
				</Col>
				<Col md="4">
					<Card className="mb-3 card-shadow-success border" body outline color="dark">
						<CardTitle>Special Title Treatment</CardTitle>
						<p>With supporting text below as a natural lead-in to additional content.</p>
						<Button outline color="dark">
							Details
						</Button>
					</Card>
				</Col>
				<Col md="4">
					<Card className="mb-3 card-shadow-success border" body outline color="success">
						<CardTitle>Special Title Treatment</CardTitle>
						<p>With supporting text below as a natural lead-in to additional content.</p>
						<Button outline color="success">
							Details
						</Button>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default TicketCard;
