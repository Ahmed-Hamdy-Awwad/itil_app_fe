import React, {Component} from "react";

export default class PageTitle extends Component {
	render() {
		let {heading, icon, subheading} = this.props;
		return (
			<div className="app-page-title mb-0">
				<div className="page-title-wrapper">
					<div className="page-title-heading">
						<div className="page-title-icon">
							<i className={icon} />
						</div>
						<div>
							{heading}
							<div className="page-title-subheading">{subheading}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
