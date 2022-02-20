import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/icons/logo.png";
import HeaderLink from "../../components/HeaderLink/HeaderLink";

import "./Header.scss";

const Header = ({ margin }) => {
	return (
		<div className="Header" style={{ marginBottom: margin }}>
			<div className="Header-inner container">
				<Link to="/"><img src={Logo} alt="" className="Header-logo" /></Link>

				<div style={{ width: "770px" }}>
					<HeaderLink link={["main", "gallery", "projects", "certification", "contacts" ]} />
				</div>
			</div>
		</div>
	);
};

export default Header;
