import React from "react";
import Card  from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import PropType from "prop-types";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let data = [
		{title: "4Geeks", description: "fjfljsfjlasgks", image: "https://img.freepik.com/foto-gratis/american-staffordshire-terrier-cachorro-sobre-mesa_1150-18205.jpg?t=st=1712127145~exp=1712130745~hmac=e7c7f645693d1f42790ffa4c18e154935aaecb0b1be87dfc4b968c7701ce3908&w=740", buttonLabel: "Go to Instagram", buttonUrl: "https://www.instagram.com/perritos_hc/?hl=es"},
		{title: "Latam pt 29", description: "qiwrqiory", image: "https://img.freepik.com/foto-gratis/beagles-cachorros-mirando-arriba_1150-18192.jpg?t=st=1712127230~exp=1712130830~hmac=ec70eaad8549664053211284da46dbe09d8dfa59bdfdfe253db38b9e11f1cb3a&w=740", buttonLabel: "Go to Facebook", buttonUrl: "https://www.facebook.com/Dogs0703/?locale=es_LA"},
		{title: "Meet", description: "mnxcmbxb", image: "https://img.freepik.com/foto-gratis/perro-lindo-grupo-cachorros-beagle-sentado-jadeando_1150-18202.jpg?t=st=1712127660~exp=1712131260~hmac=3633ce06ba5c4f02912859a1ab8bd20645ce02452cb80acbb57e1a9be5b0358a&w=826", buttonLabel: "Go to Pinterest", buttonUrl: "https://www.pinterest.es/pggr/perros/"},
		{title: "Dog", description: "ufqfivubu", image: "https://img.freepik.com/foto-gratis/perro-lindo-grupo-cachorros-beagle-sentado-jadeando_1150-18198.jpg?t=st=1712127711~exp=1712131311~hmac=c1b573c359269aeea060ebf406adf9930dd2a8cfdb57d08c70b50a2dabe1bca9&w=740", buttonLabel: "Go to Twitter", buttonUrl: "https://twitter.com/perritos_qctd?lang=es"}
	]


	Jumbotron.propTypes = {
		title: PropType.string,
		description: PropType.string,
		buttonAction: PropType.string
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron 
					title={"A Warm Welcome!"}
					description={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."}
					buttonAction={"Go to Action"}
				/>
				<div className="d-flex justify-content-center">
					<div className="row d-flex justify-content-center">
						{data.map((value, index, array) => {
							return <Card key={index} title={value.title} description={value.description} image={value.image} buttonLabel={value.buttonLabel} buttonUrl={value.buttonUrl} />
						})}
					</div>
				</div>
				
			</div>
			<Footer />
		</div>
		
	);
};

export default Home;
