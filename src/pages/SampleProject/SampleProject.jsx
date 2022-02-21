import React from "react";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import Title from "../../components/Title/Title";
import sampleCardimg1 from "../../assets/images/sampleCardImg1.png";
import sampleCardimg2 from "../../assets/images/sampleCardImg2.png";
import sampleCardimg3 from "../../assets/images/sampleCardImg3.png";

import "./SampleProject.scss";

const SampleProject = () => {
	return (
		<div className="SampleProject">
			<Header margin="65px" />
			<div className="SampleProject-inner container">
				<Title title1="Sample" title2="Project 1" margin="0 0 30px 0" />
				<div className="SampleProject-items">
					<img src={sampleCardimg1} className="SampleProject-bgImg" alt="" />
					<div className="SampleProject-textSection">
						<img src={sampleCardimg2} className="SampleProject-smImg" alt="" />
						<p className="SampleProject-text">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap
							into electronic typesetting, remaining essentially
							unchanged. It was popularised in the 1960s with the
							release of Letraset sheets containing Lorem Ipsum
							passages, and more recently with desktop publishing
							software like Aldus PageMaker including versions of
							Lorem Ipsum. Lorem Ipsum is simply dummy text of the
							printing and typesetting industry. Lorem Ipsum has
							been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
							It has survived not only five centuries, but also
							the leap into electronic typesetting, remaining
							essentially unchanged. It was popularised in the
							1960s with the release of Letraset sheets containing
							Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including
							versions of Lorem Ipsum. Lorem Ipsum is simply dummy
							text of the printing and typesetting industry. Lorem
							Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a
							galley of type and scrambled it to make a type
							specimen book. It has survived not only five
							centuries, but also the leap into electronic
							typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of
							Letraset sheets containing Lorem Ipsum passages, and
							more recently with.
						</p>
					</div>
					<img src={sampleCardimg3} className="SampleProject-bgImg" alt="" />
				</div>
			</div>
			<Footer link={[ "main", "gallery", "projects", "certification", "contacts"]} />
		</div>
	);
};

export default SampleProject;
