import "./User.css";

function User({ user, handleCardClick, isSelected }) {
	return (
		<div className='slider__card' onClick={() => handleCardClick(user)}>
			<img
				className='card__image'
				src={`https://i.pravatar.cc/?u=${user.id}`}
				alt=''
			/>
			{/* <div className='card__title'>{user.name}</div> */}
			<div className={`card__title ${isSelected ? "card__title-active" : ""}`}>
				{user.name}
			</div>
			<div className='card__subtitile'>{user.company.name}</div>
		</div>
	);
}

export default User;
