import { useState, useEffect } from "react";
import "./styles/App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import TextBlock from "./components/TextBlock/TextBlock";
import axios from "axios";

function App() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((res) => {
				console.log(res)
				setIsLoading(false);
				setError(false);
				setUsers(res.data);
			})
			.catch((err) => {
				if (err === "404" || err === "500") {
					setError(true);
					setIsLoading(false);
					setUsers([]);
				}
				console.log("Невозможно получить данные с сервера", err);
				setIsLoading(false);
				setUsers([]);
			});
	}, []);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/posts")
			.then((res) => {
				console.log(res)
				setIsLoading(false);
				setError(false);
				setPosts(res.data);
			})
			.catch((err) => {
				if (err === "404" || err === "500") {
					setError(true);
					setIsLoading(false);
					setPosts([]);
				}
				console.log("Невозможно получить данные с сервера", err);
				setIsLoading(false);
				setPosts([]);
			});
	}, []);

	return (
		<div className='App'>
			<div className='container'>
				<Header />
				<Main users={users} />
				<TextBlock users={users} />
			</div>
		</div>
	);
}

export default App;
