import React from 'react';
import { Link } from 'react-router-dom';
import { Audio, Bars } from 'react-loader-spinner';
import { redirect } from 'react-router-dom'
import Breadcumprel from '../componets/strapper_comp';
import { PokeponeCARD } from '../componets/pokemoncard';

const breadcrumbArray = ["Home", "Library", "Data"];
const HomePage: React.FC = () => (

	<div>
		<Breadcumprel array={breadcrumbArray}></Breadcumprel>
		<h1>Home Page</h1>
		<Link to="/user">Go to User 42 Page</Link>
<PokeponeCARD></PokeponeCARD>

	</div>
);

export default HomePage;