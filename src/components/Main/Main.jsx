import React from "react";
import Slider from "./../Slider/Slider";
import "./Main.css";

function Main({ users, handleCardClick, selectedCard }) {
	return (
		<>
			<div className='decoration-top'>
				<span className='decoration-top__image' />
			</div>
			<Slider users={users} handleCardClick={handleCardClick} selectedCard={selectedCard}/>
		</>
	);
}

export default Main;
