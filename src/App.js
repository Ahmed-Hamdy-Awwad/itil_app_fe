import Header from "./components/common/header";
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
				<LoginScene />
			</div>
		);
}

export default App;
