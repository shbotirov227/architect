import React, { useState } from "react";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import Title from "../../components/Title/Title";
import ProjectsCard from "../../components/ProjectsCard/ProjectsCard";
import { ArrowLeft, ArrowRight } from "../../assets/icons/icons";
import data from "./ProjectCardData.js";

import "./Projects.scss";

const Projects = () => {

	const [ count, setCount ] = useState(1);

	const decrement = () => count > 1 ? setCount(count - 1) : null;
	const increment = () => count < 5 ? setCount(count + 1) : null;

	return (
		<div className="Projects">
			<Header margin="65px" />
			<div className="Projects-inner container">
				<Title title1="Our" title2="Projects" margin="0 0 30px 0" />

				<div className="cards">
					{data.map((item, index) => <ProjectsCard key={index} img={item.img} title={item.title} text={item.text} btn={item.btn} />)}
					
					<div className="btnSection">
						<div className="startNumb">0{count}</div>
						<div className="line"></div>
						<span className="totalNumb">05</span>
						<button className="btnSection-btn" onClick={decrement}><ArrowLeft /></button>
						<button className="btnSection-btn" onClick={increment}><ArrowRight /></button>
					</div>
				</div>
			</div>
			<Footer link={[ "main", "gallery", "projects", "certification", "contacts" ]} />
		</div>
	);
};

export default Projects;
