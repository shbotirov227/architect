import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/images/icons/footerLogo.png";
import { MarkerIcon, TelIcon, MailIcon, TwitterIcon, FacebookIcon, LinkedinIcon, PinterestIcon } from "../../assets/icons/icons";

import "./Footer.scss";

const Footer = ({ link }) => {
	return (
		<div className="Footer">
			<div className="container">
				<div className="Footer-inner">
                    <Link to="/">
                        <img src={FooterLogo} alt="" className="Footer-logo" />
                    </Link>
                    <div className="Footer-links">
                        <ul className="pageLinks">
                            <h3 className="Footer-linkTitle">Information</h3>
                            {link.map((el, index) => <li className="Footer-link"><Link to={`/${el}`} key={index}>{el}</Link></li>)}
                        </ul>

                        <ul className="addresses">
                            <h3 className="Footer-linkTitle">Contacts</h3>
                            <li className="Footer-link">
                                <MarkerIcon />
                                1234 Sample Street Austin Texas 78704
                            </li>
                            <li className="Footer-link">
                                <TelIcon />
                                <a href="tel:+512.333.2222">512.333.2222</a>
                            </li>
                            <li className="Footer-link">
                                <MailIcon />
                                <a href="mailto:sampleemail@gmail.com">sampleemail@gmail.com</a>
                            </li>
                        </ul>

                        <div className="icons">
                            <h3 className="Footer-linkTitle">Social Media</h3>
                            <ul>
                                <li><Link to="/"><FacebookIcon /></Link></li>
                                <li><Link to="/"><TwitterIcon /></Link></li>
                                <li><Link to="/"><LinkedinIcon /></Link></li>
                                <li><Link to="/"><PinterestIcon /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
			</div>

            <div className="copyright">
                <h4 className="copyright-title">© 2021 All Rights Reserved</h4>
            </div>
		</div>
	);
};

export default Footer;
