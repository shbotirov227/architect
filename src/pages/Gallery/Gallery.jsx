import React from "react";
import Slider from "react-slick";
import Title from "../../components/Title/Title";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import GalleryImg1 from "../../assets/images/galleryImg1.png";
import GalleryImg2 from "../../assets/images/galleryImg2.png";
import GalleryImg3 from "../../assets/images/galleryImg3.png";
import GalleryImg4 from "../../assets/images/galleryImg4.png";
import GalleryImg5 from "../../assets/images/galleryImg5.png";
import GalleryImg6 from "../../assets/images/galleryImg6.png";
import GalleryImg7 from "../../assets/images/galleryImg7.png";
import GalleryImg8 from "../../assets/images/galleryImg8.png";
import GalleryImg9 from "../../assets/images/galleryImg9.png";
import GalleryImg10 from "../../assets/images/galleryImg10.png";

import "./Gallery.scss";
import { ArrowLeft, ArrowRight } from "../../assets/icons/icons";

class Gallery extends React.Component {
	// const [count, setCount] = useState(1);
	count = 1;

	constructor(props) {
		super(props);
		this.next = this.next.bind(this);
		this.previous = this.previous.bind(this);
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

	increment() {
		if (this.count < 5) this.setCount(this.count + 1);
	}

	decrement() {
		if (this.count > 0) this.setCount(this.count - 1);
	}

	next() {
		this.slider.slickNext();
		this.increment()
	}

	previous() {
		this.slider.slickPrev();
		this.decrement()
	}

	render() {
		const settings = {
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 2.3,
			speed: 500,
			rows: 2,
			slidesPerRow: 2,
		};

		return (
			<div className="Gallery">
				<Header margin="65px" />
				<div className="Gallery-inner container">
					<Title
						title1="Photo"
						title2="Gallery"
						margin="0 0 30px 0"
					/>
					<div className="sliderSection">
						<Slider ref={(c) => (this.slider = c)} {...settings}>
							<img src={GalleryImg1} alt="" />
							<img src={GalleryImg2} alt="" />
							<img src={GalleryImg3} alt="" />
							<img src={GalleryImg4} alt="" />
							<img src={GalleryImg5} alt="" />
							<img src={GalleryImg6} alt="" />
							<img src={GalleryImg7} alt="" />
							<img src={GalleryImg8} alt="" />
							<img src={GalleryImg9} alt="" />
							<img src={GalleryImg10} alt="" />
							<img src={GalleryImg4} alt="" />
							<img src={GalleryImg6} alt="" />
						</Slider>

						<div className="btnSection">
							<div className="startNumb">0{this.count}</div>
							<div className="line"></div>
							<span className="totalNumb">05</span>
							<button
								className="btnSection-btn"
								onClick={this.previous}>
								<ArrowLeft />
							</button>
							<button
								className="btnSection-btn"
								onClick={this.next}>
								<ArrowRight />
							</button>
						</div>
					</div>
				</div>
				<Footer link={[ "main", "gallery", "projects", "certification", "contacts" ]} />
			</div>
		);
	}
}

export default Gallery;
