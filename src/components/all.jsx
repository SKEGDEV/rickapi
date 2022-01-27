import '../styles/all.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function All (){

	const [character_data, setCharacter_data] = useState([]);
	const [info, setInfo] = useState([]);

	const change_page = (type_btn)=>{	
		window.scroll(0,0);
		console.log(info.prev);
		if(type_btn==1){
			if(info.next == null){
				localStorage.setItem("url", "https://rickandmortyapi.com/api/character?page=42");
			}else{
				localStorage.setItem("url", info.next);
			}
		}
		if(type_btn==0){
			if(info.prev == null){
				localStorage.setItem("url", "https://rickandmortyapi.com/api/character");
			}else{
				localStorage.setItem("url",info.prev);
			}
		}
	}

	const get_data = async ()=>{	
		var url = ""
		if(localStorage.getItem('url') == null){
			url= "https://rickandmortyapi.com/api/character";
		}else{
			url = localStorage.getItem('url');
		}
		try{
			const data = await axios.get(url);
			setCharacter_data(data.data["results"]);
			setInfo(data.data["info"]);
		}catch(e){
			alert(e.message);
		}
	}

	useEffect(()=>{	
		get_data();
	},[])

	return (
		<div>
		<div className="rick-cards-container">
			{character_data.map(set_data=>(
			<div className="rick-card">
				<img src={set_data.image} alt="caducated" />
				<Link to={"/character/"+set_data.id}><h1>{set_data.name}</h1></Link>
				<h3>{set_data.status}</h3>
				<h3>{set_data.gender}</h3>
				<Link to={"/character/"+set_data.id}><button className="view-more">View more</button></Link>
			</div>
			))}	
		</div>
		<button className="left"
				onClick={()=>{change_page(0); get_data();}}
			>
				Prev
			</button>
			<button	className="right" 
	onClick={()=>{change_page(1);
				get_data();}}>
				Next
			</button>
		</div>
	);
}
