import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/filter.css';
import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default function Filter(){

	const [name, setName] = useState("");
	const [characters, setCharacters] = useState([]);

	const get_characters = async()=>{
		if(name!=""){
			try{
				const url="https://rickandmortyapi.com/api/character/?name="+name;
				const data = await axios.get(url);
				setCharacters(data.data["results"]);
			}catch(e){}
		}else{
			setCharacters([]);
		}
	}


	return (
		<div>
			<div className="search-container">
				<div className="input">
					<input
						value={name}
						onChange={(event)=>{setName(event.target.value); get_characters();}}
						type="text"
						placeholder=" "
					/>
					<p>Please enter your name</p>
				</div>
			</div>
			<div className="table-container-reduce">
				<div className="table-responsive">
				<table className="table">
					<thead className="table table-dark">
						<tr>
							<th>Photo</th>
							<th>Name</th>
							<th>Status</th>
							<th>Species</th>
							<th></th>
					</tr>
					</thead>
					<tbody>
					{characters.map(data=>(
					<tr>
						<td><img src={data.image} alt="caducated" /> </td>
						<td>{data.name}</td>
						<td>{data.status}</td>
						<td>{data.species}</td>
						<td><Link to={"/character/"+data.id}><button>View more</button></Link></td>
					</tr>
					))}
					</tbody>
				</table>
				</div>
			</div>
		</div>
	)
}
