import React from "react";
import "./styles/App.css";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Header />
				<Slider />

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
