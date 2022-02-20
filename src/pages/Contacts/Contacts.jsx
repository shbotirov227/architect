import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Title from "../../components/Title/Title";
import Header from "../../containers/Header/Header";
import Footer from "../../containers/Footer/Footer";
import { ExitIcon } from "../../assets/icons/icons";
import SuccessImg from "../../assets/images/success.png"

import "./Contacts.scss";

const containerStyle = {
	width: "114.8%",
	height: "520px",
	marginBottom: 120,
};

const center = {
	lat: 41.311081,
	lng: 69.240562,
};

const Contacts = () => {
	const [ state, setState ] = useState(false);
	const [ success, setSuccess ] = useState(false);

	return (
		<div className="Contacts">
			<Header margin="65px" />

			<div className="Contacts-inner container">
				<div className="Contacts-left">
					<Title title1="Contact" title2="Information" margin="0 0 35px 0" />

					<div className="Contacts-addresses">
						<h4 className="Contacts-title">Company Name</h4>
						<span className="Contacts-address">1234 Sample Street Austin Texas 76401</span>
					</div>

					<div className="Contacts-addresses">
						<h4 className="Contacts-title tel">512.333.2222</h4>
						<span className="Contacts-address">sampleemail@gmail.com</span>
					</div>

					<button onClick={() => setState(true)} className="Contacts-btn">Contact US</button>

					{state ? (
						<div className="Modal">
							<div className="Modal-top">
								<h3 className="Modal-title">Задать вопрос</h3>
								<button className="exitIcon" onClick={() => setState(false)}><ExitIcon /></button>
							</div>

							<input type="text" placeholder="Имя" />
							<input type="number" name="tel" placeholder="Номер телефона" />
							<input type="email" name="email" placeholder="E-mail" />
							<input type="text" placeholder="Интересующий товар/услуга" />
							<textarea name="textarea" placeholder="Сообщение*"></textarea>

							<div className="checkBox">
								<input type="checkbox" name="checkbox" id="checkbox" />
								<label htmlFor="checkbox">Отправляя заявку Вы соглашаетесь с политикой конфиденциальности</label>
							</div>

							<button className="Modal-btn" onClick={() => {setSuccess(true); setState(false)}}>Отправить</button>
						</div>
					) : undefined}

					{success ? (
						<div className="SuccessModal">
							<button className="exitIcon" onClick={() => setSuccess(false)}><ExitIcon /></button>
							<img src={SuccessImg} alt="" />
							<h3 className="SuccessModal-title">Спасибо !</h3>
							<h5 className="SuccessModal-text">Ваше сообщение отправлено мы свяжемся с вами в ближайшее время</h5>
							<button className="SuccessModal-btn" onClick={() => setSuccess(!success)}>ВЕРНУТСЯ НАЗАД</button>
						</div>
					) : undefined}
				</div>

				<div className="Contacts-right">
					<LoadScript googleMapsApiKey="AIzaSyDgN9Rr8fV_pEFYosjP-uttvTWHgWh9MXk">
						<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
							<Marker position={center} />
						</GoogleMap>
					</LoadScript>
				</div>
			</div>

			<Footer link={[ "main", "gallery", "projects", "certification", "contacts" ]} />
		</div>
	);
};

export default Contacts;
