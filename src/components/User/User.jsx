import "./User.css";

function User({ user, handleImageClick, isActive }) {
	return (
		<div className='slider__card' onClick={handleImageClick}>
			{/* <img className=`card__image ${isActive ? 'card__image-active' : 'card__image'}` src={"https://i.pravatar.cc/"} alt='' /> */}
			<img className='card__image' src={`https://i.pravatar.cc/?u=${user.id}`} alt='' />
			<div className='card__title'>{user.name}</div>
			<div className='card__subtitile'>{user.company.name}</div>
		</div>
	);
}

export default User;
