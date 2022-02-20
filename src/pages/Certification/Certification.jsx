import React from "react";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import Title from "../../components/Title/Title";

import "./Certification.scss";

const Certification = () => {
	return (
		<div className="Certification">
			<Header margin="65px" />

			<div className="container">
				<Title title1="Company" title2="Certifications" margin="0 0 400px 0" />
			</div>
			
			<Footer link={["main", "gallery", "projects", "certification", "contacts"]} />
		</div>
	);
};

export default Certification;
