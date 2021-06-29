/*
- Use this component to wrap the input field/s you want to validate against the following criteria:
	1- Minimum value, requirements (props):
		*min
		*value
		*required
	2- Value existence, requirements (props):
		*value
		*required
	3- Value Uniqueness, requirements (props):
		*id
		*value
		*required
		*unique='true'
		*url (this should be the url to be passed to an axios get request, it should include the value needed to be validated)
- Pass these props to Validator it's self:
	1- validate: whenever parent of Validator changes this prop from false to true or vice versa, Validator calls the validation method to validate the required input field/s.
	2- submit: a function that Validator will call if the required field/s is/are valid. Obviously this function is written in parent of validator and passed to Validator through this prop (submit)
 */

import React from "react";
import axios from "axios";

class Validator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			elements: [],
			uniqueElements: [],
			invalidElements: [],
			uniquenessResult: {},
		};
	}

	validate = (children) => {
		this.setState({uniqueElements: []});
		return React.Children.map(children, (child) => {
			let childProps = {};
			if (typeof child === "object" && child.props.required) {
				if (Number(child.props.selected) === 0) {
					childProps = {inputclass: child.props.inputclass ? child.props.inputclass + " is-invalid" : "is-invalid"};
					this.setState({invalidElements: [child]});
				} else if (!child.props.value && !child.props.selected) {
					childProps = {className: child.props.className + " is-invalid", valid: false};
					this.setState({invalidElements: [child]});
				} else if (child.props.min) {
					if (child.props.value < child.props.min) {
						childProps = {className: child.props.className + " is-invalid"};
						this.setState({invalidElements: [child]});
					}
				} else if (child.props.unique) {
					let unique = this.state.uniqueElements;
					unique.push(child);
					this.setState({uniqueElements: unique});
					if (this.state.uniquenessResult[child.props.id])
						childProps = {
							className: child.props.className + " is-invalid",
						};
				}
			} else if (typeof child !== "object") return child;
			childProps.children = this.validate(child.props.children);
			return React.cloneElement(child, childProps);
		});
	};

	submitIfValid = async () => {
		let uniquenessResult = this.state.uniquenessResult;
		for (let element of this.state.uniqueElements) {
			await axios.get(element.props.url).then((res) => {
				if (res.data.length > 0) {
					uniquenessResult[element.props.id] = true;
					this.setState({invalidElements: this.state.invalidElements.concat(element)});
				} else uniquenessResult[element.props.id] = false;
				this.setState({
					uniquenessResult: uniquenessResult,
				});
			});
		}
		setTimeout(() => {
			if (this.state.invalidElements.length > 0) {
				this.setState({elements: this.validate(this.props.children), invalidElements: []});
			} else if (this.state.invalidElements.length === 0) {
				this.setState({elements: this.validate(this.props.children), counter: 0});
				this.props.submit();
			}
		});
	};

	componentDidUpdate(prev) {
		if (prev.validate !== this.props.validate) {
			this.setState({elements: this.validate(this.props.children), counter: 1});
			this.submitIfValid();
		}
		if (prev.children !== this.props.children && prev.validate === this.props.validate && this.state.counter === 0) {
			this.setState({elements: this.props.children});
		} else if (prev.children !== this.props.children && prev.validate === this.props.validate && this.state.counter === 1) {
			this.setState({elements: this.validate(this.props.children)});
		}
	}

	componentDidMount() {
		this.setState({elements: this.props.children});
	}

	render() {
		return this.state.elements;
	}
}

export default Validator;
