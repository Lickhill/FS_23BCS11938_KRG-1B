import "../App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from "react-router-dom";

function Navigation() {
	const navigate = useNavigate();

	return (
		<nav style={{ marginBottom: "20px" }}>
			<button onClick={() => navigate("/")}>Home</button>
			<button onClick={() => navigate("/form")}>Form</button>
			<button onClick={() => navigate("/context")}>Context</button>
			<button onClick={() => navigate("/effect")}>Effect</button>
			<button onClick={() => navigate("/products")}>Products</button>
			<button onClick={() => navigate("/todos")}>Todos</button>
		</nav>
	);
}

function Routingstudy() {
	return (
		<Router>
			<div className="App">
				<Navigation />

				<Routes>
					<Route
						path="/"
						element={
							<div>
								<h2>Home Page</h2>
								<p>Welcome to the Home Section</p>
							</div>
						}
					/>
					<Route
						path="/form"
						element={
							<div>
								<h2>Form Section</h2>
								<p>This is the Form page</p>
							</div>
						}
					/>
					<Route
						path="/context"
						element={
							<div>
								<h2>Context Section</h2>
								<p>This is the Context Study page</p>
							</div>
						}
					/>
					<Route
						path="/effect"
						element={
							<div>
								<h2>Effect Section</h2>
								<p>This is the useEffect Study page</p>
							</div>
						}
					/>
					<Route
						path="/products"
						element={
							<div>
								<h2>Products Section</h2>
								<p>This is the Products page</p>
							</div>
						}
					/>
					<Route
						path="/todos"
						element={
							<div>
								<h2>Todos Section</h2>
								<p>This is the Todo List page</p>
							</div>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default Routingstudy;
