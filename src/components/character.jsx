import '../styles/character.css';
import { useParams, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Get_character(){

	const {id} = useParams();
	const [character_data, setCharacter_data] = useState([]);
	const [location, setLocation] = useState("");
	const [origin, setOrigin] = useState("");

	const get_character = async()=>{
		const url = "https://rickandmortyapi.com/api/character/"+id;
		try{
			const data = await axios.get(url);
			setCharacter_data(data.data);
			setOrigin(data.data.origin['name']);
			setLocation(data.data.location['name']);
		}catch(e){
			alert(e.message);
		}
	}

	useEffect(()=>{
		get_character();
	},[]);

	return(
		<div>
			<div className="info-container">
				<div className="top"></div>
				<div className="photo">
					<img src={character_data.image} alt="caducated" />
				</div>
				<div className="name-container">
					<h3>// Prisioner Name*</h3>
					<div className="name">
						<h1>{character_data.name}</h1>
					</div>
				</div>	
				<div className="info">
					<div className="text">
						<h4>// Status:</h4>		
						<h2>{character_data.status}</h2>
					</div>
					<div className="text">
						<h4>// Species:</h4>
						<h2>{character_data.species}</h2>
					</div>
				</div>
				<div className="info">
					<div className="text">
						<h4>// Type:</h4>
						<h2>{character_data.type}</h2>
					</div>
					<div className="text">
						<h4>// Gender:</h4>
						<h2>{character_data.gender}</h2>
					</div>
				</div>
				<div className="info">
					<div className="text">
						<h4>// Origin:</h4>
						<h2>{origin}</h2>
					</div>
					<div className="text">
						<h4>// Location:</h4>
						<h2>{location}</h2>
					</div>
				</div>
				<Link to="/all"><button className="more-prisioner">//:Explore prison --{">"}</button></Link>
			</div>
		</div>
	)
}
