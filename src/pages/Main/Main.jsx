import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Title from "../../components/Title/Title";
import Footer from "../../containers/Footer/Footer";
import Header from "../../containers/Header/Header";
import MainImg1 from "../../assets/images/mainImg1.png";
import AboutImg1 from "../../assets/images/aboutImg1.png";
import AboutImg2 from "../../assets/images/aboutImg2.png";
import AboutImg3 from "../../assets/images/aboutImg3.png";
import OurProjectsImg1 from "../../assets/images/ourProjectImg1.png";
import OurProjectsImg2 from "../../assets/images/ourProjectImg2.png";
import OurProjectsImg3 from "../../assets/images/ourProjectImg3.png";
import OurProjectsImg4 from "../../assets/images/ourProjectImg4.png";
import OurProjectsImg5 from "../../assets/images/ourProjectImg5.png";
import OurProjectsImg6 from "../../assets/images/ourProjectImg6.png";
import ContactUsImg from "../../assets/images/contactUsImg.png";
import SuccessImg from "../../assets/images/success.png"
import { ArrowLeft, ArrowRight, ExitIcon } from "../../assets/icons/icons";

import "./Main.scss";

const Main = () => {

	const [ count, setCount ] = useState(1);
	const [ state, setState ] = useState(false);

	const decrement = () => count > 1 ? setCount(count - 1) : null;
	const increment = () => count < 2 ? setCount(count + 1) : null;

	const settings = {
		className: "slider variable-width",
		dots: false,
		infinite: true,
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true
	};


	return (
		<div className="Main">
			<Header />
			<div className="container">
				<div className="Main-topImgSection">
					<div>
						<Title title1="PROJECT" title2="Lorum" margin="0 0 100px 0" />
						<div className="btnSection">
							<div style={{display: "flex", alignItems: "center", marginBottom: 100}}>
								<button className="btnSection-btn" onClick={decrement}><ArrowLeft /></button>
								<button className="btnSection-btn" onClick={increment}><ArrowRight /></button>
							</div>
							<div style={{display: "flex", alignItems: "center"}}>
								<div className="startNumb">0{count}</div>
								<div className="line"></div>
								<span className="totalNumb">02</span>
							</div>
						</div>
					</div>
					<div className="imgSection">
						<img src={MainImg1} alt="" className="Main-mainImg1" />
						<Link to="/projects/sample" className="Main-btn">View Project<ArrowRight /></Link>
					</div>
				</div>

				<div className="Main-aboutSection">
					<div className="images">
						<img src={AboutImg1} className="img1" alt="" />
						<img src={AboutImg2} className="img2" alt=""  />
					</div>
					<div className="textsection">
						<img src={AboutImg3} className="img3" alt="" />
						<div>
							<h4 className="aboutSection-title">About</h4>
							<p className="aboutSection-text">
								Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the industry's
								standard dummy text ever since the 1500s, when an unknown printer
								took a galley of type and scrambled it to make a type specimen book.
								It has survived not only five centuries, but also the leap into electronic
								typesetting, remaining essentially unchanged.
							</p>
							<Link to="/projects" className="Main-btn">Read more<ArrowRight /></Link>
						</div>
					</div>
				</div>

				<div className="Main-focus">
					<h3 className="focus-title">Main Focus/Mission Statement</h3>
					<div className="items">
						<div className="focus-item item1">
							<h2 className="item-numb">1</h2>
							<p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p>
						</div>
						<div className="focus-item item2">
							<h2 className="item-numb">2</h2>
							<p className="item-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p>
						</div>
					</div>
				</div>

				<div className="Main-ourProjects">
					<Title title1="Our Projects" margin="0 0 60px 0"/>
					<div style={{display: "flex", alignItems: "center", marginBottom: 30}}>
						<img src={OurProjectsImg1} alt="" style={{marginRight: 30}} width="570" />
						<img src={OurProjectsImg2} alt="" width="570" />
					</div>
					<div className="carousel">
						<Slider {...settings}>
							<img src={OurProjectsImg3} alt="" />
							<img src={OurProjectsImg4} alt="" />
							<img src={OurProjectsImg5} alt="" />
							<img src={OurProjectsImg6} alt="" />
						</Slider>
					</div>
					<Link to="/projects" className="Main-btn">All Projects<ArrowRight /></Link>
				</div>

				<div className="Main-contactUs">
					<Title title1="Contact Us" margin="0 0 25px 0" />
					<div style={{display: "flex", alignItems: "flex-end"}}>
						<div className="left">
							<input type="text" placeholder="Имя" />
							<input type="number" name="tel" placeholder="Номер телефона" />
							<input type="email" name="email" placeholder="E-mail" />
							<input type="text" placeholder="Интересующий товар/услуга" />
							<textarea name="textarea" placeholder="Сообщение*"></textarea>
						</div>
						<div className="right">
							<img src={ContactUsImg} alt="" height="370" />
						</div>
					</div>
					<button onClick={() => setState(true)} className="Main-btn">Send Email<ArrowRight /></button>
					{state ? (
						<div className="SuccessModal">
							<button className="exitIcon" onClick={() => setState(!state)}><ExitIcon /></button>
							<img src={SuccessImg} alt="" />
							<h3 className="SuccessModal-title">Спасибо !</h3>
							<h5 className="SuccessModal-text">Ваше сообщение отправлено мы свяжемся с вами в ближайшее время</h5>
							<button className="SuccessModal-btn" onClick={() => setState(!state)}>ВЕРНУТСЯ НАЗАД</button>
						</div>
					) : undefined}
				</div>
				
			</div>
			<Footer link={["main", "gallery", "projects", "certification", "contacts"]} />
		</div>
	);
};

export default Main;
