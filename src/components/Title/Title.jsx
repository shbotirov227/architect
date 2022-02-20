import React from "react";

import "./Title.scss";

const Title = ({ title1, title2, margin }) => {
	return (
		<div className="Title" style={{ margin: margin }}>
			<h2 className="Title-title1">{title1}</h2>
			<h2 className="Title-title2">{title2}</h2>
		</div>
	);
};

export default Title;
