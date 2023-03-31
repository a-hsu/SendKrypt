import { Footer, Navbar, Services, Transactions, Welcome } from "./components";

function App() {
	return (
		<div className="min-h-screen">
			<div className="gradient-bg-welcome min-h-screen">
				<Navbar />
				<Welcome />
			</div>
			{/* <Services />
			<Transactions />
			<Footer /> */}
		</div>
	);
}

export default App;
