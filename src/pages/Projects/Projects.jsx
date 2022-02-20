import React from "react";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import Title from "../../components/Title/Title";

import "./Projects.scss";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";

const Projects = () => {
	return (
		<div className="Projects">
			<Header margin="65px"/>
			<div className="Projects-inner container">
				<Title title1="Our" title2="Projects" margin="0 0 30px 0" />

				<div className="cards">
					<ProjectsCard />
				</div>
			</div>
			<Footer link={["main", "gallery", "projects", "certification", "contacts"]} />
		</div>
	);
};

export default Projects;
