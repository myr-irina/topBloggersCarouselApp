import React from "react";
import "./User.css";

function User({ user }) {
	return (
		<div className='slider__card'>
			<span className='card__image' />
			<div className='card__title'>{user.name}</div>
			<div className='card__subtitile'>{user.company.name}</div>
		</div>
	);
}

export default User;
