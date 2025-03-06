import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from './components/Navibar';
import Home from './Home';
import User from './User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

export default function App() {
	return (
	<>
		<Router basename="/Timu2r">
			<Navibar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/galery" element={<User />} />
			</Routes>
		</Router>
		</>
	);
}
