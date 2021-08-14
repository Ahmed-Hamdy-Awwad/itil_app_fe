import {Route} from "react-router-dom";
import Header from "./components/common/header";
import AppSidebar from "./components/common/side_bar";
import LoginScene from "./components/login/login_scene";
import NewTicketScene from "./components/ticket/new_ticket_scene";

function App() {
	if (localStorage.getItem("token")) {
		return <LoginScene />;
	} else
		return (
			<div>
				<Header />
				<div className="app-main">
					<AppSidebar />
					<div className="app-main__outer">
						<div className="app-main__inner">
							<Route path="/home" component={LoginScene} />
							<Route path="/newticket" component={NewTicketScene} />
						</div>
					</div>
				</div>
			</div>
		);
}

export default App;
