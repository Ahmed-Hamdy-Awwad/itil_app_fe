import { Route } from "react-router-dom";
import Header from "./components/common/header";
import AppSidebar from "./components/common/side_bar";
import LoginScene from "./components/login/login_scene";
import NewTicketScene from "./components/ticket/new_ticket_scene";
import ViewTicketScene from "./components/ticket/view_ticket_scene";

function App() {
	if (localStorage.getItem("token")) {
		return (
			<div>
				<Header />
				<div className="app-main">
					<AppSidebar />
					<div className="app-main__outer">
						<div className="app-main__inner">
							<Route path="/newticket" component={NewTicketScene} />
							<Route path="/viewticket" component={ViewTicketScene} />
						</div>
					</div>
				</div>
			</div>
		);
	} else return <LoginScene />;
}

export default App;
