import axios from "axios";
import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { Row, Col, Card, CardTitle } from "reactstrap";

class ViewTicket extends Component {
	constructor() {
		super();
		this.state = {
			data: null,
		};
	}

	updateTicket = (e) => {
		axios.patch(`ticket/${e.target.id}/`, { description: e.target.value });
	};

	deleteTicket = (e) => {
		axios.delete(`ticket/${e.target.id}`).then(window.location.reload());
	};

	componentDidMount() {
		axios
			.get("ticket/?serializer=get")
			.then((res) => {
				if (res) this.setState({ data: res.data });
			})
			.catch((err) => {
				console.error(err.response);
			});
	}

	render() {
		const colors = { Pending: "warning", Opened: "dark", Closed: "success" };
		return (
			this.state.data && (
				<Row>
					{this.state.data.map((ticket) => {
						return (
							<Col md="4" key={ticket.id}>
								<Card className="mb-3 card-shadow-success border" body outline color={colors[ticket.status]}>
									<CardTitle>{ticket.reporter ? ticket.reporter.first_name : "Anonymous"}</CardTitle>
									<Input defaultValue={ticket.description} id={ticket.id} onBlur={this.updateTicket} />
									<p className="mt-1">Move out of the field to update</p>
									<Button outline color="danger" className="mt-2" id={ticket.id} onClick={this.deleteTicket}>
										Delete
									</Button>
								</Card>
							</Col>
						);
					})}
				</Row>
			)
		);
	}
}

export default ViewTicket;
