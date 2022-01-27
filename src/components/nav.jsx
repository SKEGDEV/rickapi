import '../styles/nav.css';
import {Link} from 'react-router-dom';

export default function Nav(){

	var status = 0;

	const clicked = (type_btn)=>{
		const home = document.getElementById("home");
		const all = document.getElementById("all");
		const filter = document.getElementById("filter");
		if(type_btn == 1){
			home.classList.add("clicked");
			all.classList.remove("clicked"); 
			filter.classList.remove("clicked");
		}
		if(type_btn == 2){
			home.classList.remove("clicked");
			all.classList.add("clicked");
			filter.classList.remove("clicked");
		}
		if(type_btn == 3){
			home.classList.remove("clicked");
			all.classList.remove("clicked");
			filter.classList.add("clicked");
		}
	}

	const change_status = ()=>{
		const btn = document.getElementById("burger");
		const menu = document.getElementById("nav");
		if(status == 0){
			btn.classList.add("activate");
			menu.classList.add("expand");
			status = 1;
		}else{
			btn.classList.remove("activate");
			menu.classList.remove("expand");
			status = 0;
		}
	}


	return(
		<header>
			<img className="nav-logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="caducated" />
			<ul className="rick-nav-menu" id="nav">
				<li><Link to="/"><button className="clicked" id="home" onClick={()=>{change_status(); clicked(1);}}>
				Home</button></Link></li>
				<li><Link to="/all"><button id="all" onClick={()=>{change_status(); clicked(2);}}>
				All</button></Link></li>
				<li><Link to="/filter"><button id="filter" onClick={()=>{change_status(); clicked(3);}}>
				Filter</button></Link></li>
			</ul>
			<div
				className="burger"
				id="burger"
				onClick={change_status}
			>
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>
		</header>
	)
}
