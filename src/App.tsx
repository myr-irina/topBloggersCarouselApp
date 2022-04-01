import { useState, useEffect } from "react";
import "./styles/App.css";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import TextBlock from "./components/TextBlock/TextBlock";
import axios from "axios";

function App() {
	const [users, setUsers] = useState([]);

	async function fetchUsers() {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/users"
		);
		console.log(response.data[0])
		setUsers(response.data);
	}

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<div className='App'>
			<div className='container'>
				<Header />
				<Slider users={users} />
				<TextBlock />
			</div>
		</div>
	);
}

export default App;
