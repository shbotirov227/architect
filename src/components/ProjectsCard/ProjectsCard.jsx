import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../assets/icons/icons";

import "./ProjectsCard.scss";

const ProjectsCard = ({ img, title, text, btn }) => {
	return (
		<div className="ProjectsCard">
			<div className="ProjectsCard-left">
				<img src={img} className="ProjectsCard-img" alt="" />
			</div>
			<div className="ProjectsCard-right">
				<h4 className="ProjectsCard-title">{title}</h4>
				<p className="ProjectsCard-text">{text}</p>
				<Link to="/projects/sample" className="ProjectsCard-btn">{btn}<ArrowRight /></Link>
			</div>
		</div>
	);
};

export default ProjectsCard;
