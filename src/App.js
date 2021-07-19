import Header from "./components/common/header";
import AppSidebar from "./components/common/side_bar";
import LoginScene from "./components/login/login_scene";

function App() {
	if (localStorage.getItem("token")) {
		return (
			<div>
				<Header />
				<LoginScene />
			</div>
		);
	} else
		return (
			<div>
				<Header />
				<div className="app-main">
					<AppSidebar />
					{/* <LoginScene /> */}
				</div>
			</div>
		);
}

export default App;
