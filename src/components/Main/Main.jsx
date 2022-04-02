import React from "react";
import Slider from "./../Slider/Slider";
import "./Main.css";

function Main({ users }) {
	return (
		<>
			<div className='decoration-top'>
				<span className='decoration-top__image' />
			</div>
			<Slider users={users} />
		</>
	);
}

export default Main;
