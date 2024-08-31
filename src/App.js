import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import JobList from "./component/jobList/index";
import ShowJob from "./component/showJob/index";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>Recherche d'emploi</h1>
				<div className="container">
					<JobList />
				</div>
				<div className="container">
					<ShowJob />
				</div>
			</div>
		</Provider>
	);
}

export default App;
