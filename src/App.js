import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Main, Gallery, Projects, Certification, Contacts, SampleProject } from "./pages/index.js";

import "./assets/main.scss";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route exact path="/" element={<Main />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/sample" element={<SampleProject />} />
					<Route path="/certification" element={<Certification />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/main" element={<Navigate replace to="/" />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
