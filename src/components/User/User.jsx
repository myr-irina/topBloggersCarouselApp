import "./User.css";

function User({ user, handleCardClick, isSelected }) {
	return (
		<div className='slider__card' onClick={() => handleCardClick(user)}>
			<img
				className={`card__image ${isSelected ? "card__image-active" : ""}`}
				src={`https://i.pravatar.cc/?u=${user.id}`}
				alt=''
			/>
			<div className={`card__title ${isSelected ? "card__title-active" : ""}`}>
				{user.name}
			</div>
			<div
				className={`card__subtitle ${
					isSelected ? "card__subtitle-active" : ""
				}`}
			>
				{user.company.name}
			</div>
		</div>
	);
}

export default User;
