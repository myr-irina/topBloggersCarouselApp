import React from "react";
import "./styles/App.css";

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<header className='header'>
					<h1 className='title'>Наши топ-блогеры</h1>
					<h2 className='subtitle'>
						Лучше специалисты в своем деле, средний опыт работы в профессии - 27
						лет
					</h2>
				</header>

				<div className='arrow'>
					<p>
						<img className='arrow-left_image' />
					</p>
					<p>
						<img className='arrow-right_image' />
					</p>
				</div>
				<section className='slider'>
					<div className='slider__card'>
						<img className='slider__image' alt="" />
						<div className='card__title'>Иванов Сергей</div>
						<div className='card__subtitile'>Delphine</div>
					</div>
					<div className='slider__card'>
					<img className='slider__image' alt="" />
						<div className='card__title'>Иванов Сергей</div>
						<div className='card__subtitile'>Delphine</div>
					</div>
					<div className='slider__card'>
					<img className='slider__image' alt="" />
						<div className='card__title'>Иванов Сергей</div>
						<div className='card__subtitile'>Delphine</div>
					</div>
					<div className='slider__card'>
					<img className='slider__image' alt="" />
						<div className='card__title'>Иванов Сергей</div>
						<div className='card__subtitile'>Delphine</div>
					</div>
				</section>
			
				<section className='text-block'>
					<h2 className='text-block__title'>
						3 актуальных поста Moriah.Stanton
					</h2>
					<h3 className='text-block__subtitle'>Заголовок поста</h3>
					<p className='text-block__content'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec
						platea ipsum ornare interdum. Aliquet metus suscipit ornare aliquet
						accumsan, massa risus quisque ac. Pellentesque risus mauris mattis
						viverra amet sed elit. Pellentesque dui vitae amet diam convallis
						nisi nec.
					</p>

					<h3 className='text-block__subtitle'>Заголовок поста</h3>
					<p className='text-block__content'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec
						platea ipsum ornare interdum. Aliquet metus suscipit ornare aliquet
						accumsan, massa risus quisque ac. Pellentesque risus mauris mattis
						viverra amet sed elit. Pellentesque dui vitae amet diam convallis
						nisi nec.
					</p>

					<h3 className='text-block__subtitle'>Заголовок поста</h3>
					<p className='text-block__content'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis nec
						platea ipsum ornare interdum. Aliquet metus suscipit ornare aliquet
						accumsan, massa risus quisque ac. Pellentesque risus mauris mattis
						viverra amet sed elit. Pellentesque dui vitae amet diam convallis
						nisi nec.
					</p>
				</section>
			</div>
		</div>
	);
}

export default App;
