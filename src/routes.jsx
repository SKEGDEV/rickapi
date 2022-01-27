import Nav from './components/nav.jsx';
import All from './components/all.jsx';
import Get_character from './components/character.jsx'; 
import Filter from './components/filter.jsx';
import Home from './components/home.jsx';
import Footer from './components/footer.jsx';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';

export default function App_Routes(){
	return(
		<Router>
		<div>
			<Nav />
			<Routes>
				<Route path="/character/:id" element={<Get_character />}/>
				<Route path="/all" element={<All />}/>	
				<Route path="/filter" element={<Filter />}/>
				<Route path="/" element={<Home/>}/>
			</Routes>
			<Footer />
		</div>
		</Router>
	)
}
