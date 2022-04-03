import "./User.css";

function User({ user }) {

	return (
		<div className='slider__card' >
			<img className='card__image' src={"https://i.pravatar.cc/"} alt='' />
			<div className='card__title'>{user.name}</div>
			<div className='card__subtitile'>{user.company.name}</div>
		</div>
	);
}

export default User;
