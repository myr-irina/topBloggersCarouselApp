import React from "react";
import "./styles/App.css";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import TextBlock from "./components/TextBlock/TextBlock";

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Header />
				<Slider />
				<TextBlock/>
			
			</div>
		</div>
	);
}

export default App;
