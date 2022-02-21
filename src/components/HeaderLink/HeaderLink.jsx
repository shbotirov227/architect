import React from "react";
import { Link } from "react-router-dom";

import "./HeaderLink.scss";

const HeaderLink = ({ link }) => {
	return (
		<ul className="HeaderLink">
			{link.map((el, index) => (
				<li key={index}>
					<Link to={`/${el}`} className={`HeaderLink-link`}>{el}</Link>
				</li>
			))}
		</ul>
	);
};

export default HeaderLink;
