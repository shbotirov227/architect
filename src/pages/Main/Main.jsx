import Title from "../../components/Title/Title";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import MainImg1 from "../../assets/images/mainImg1.png";

import "./Main.scss";

const Main = () => {
	return (
		<div className="Main">
			<Header />
			<div className="container">
				<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<Title title1="PROJECT" title2="Lorum" margin="0 0 100px 0" />
					<div className="imgSection">
						<img src={MainImg1} alt="" className="Main-mainImg1" />
					</div>
				</div>
			</div>
			<Footer link={["main", "gallery", "projects", "certification", "contacts"]} />
		</div>
	);
};

export default Main;
