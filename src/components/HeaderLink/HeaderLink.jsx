import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./HeaderLink.scss";

const HeaderLink = ({ link }) => {
	const [active, setActive] = useState(link[0]);

	console.log(active);

	return (
		<ul className="HeaderLink">
			{link.map((el, index) => (
				<li key={index}>
					<Link
						to={`/${el}`}
						onClick={() => setActive(el)}
						active={active === index}
						className={`HeaderLink-link`}>
						{el}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default HeaderLink;
