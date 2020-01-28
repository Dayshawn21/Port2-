import React from 'react';
import IZ from '../img/image 1.png';
import barber from '../img/Optimized-barber.png';
import cont from '../img/Optimized-cont.png';
import player from '../img/Optimized-sports.png';
import news from '../img/news.png';
import timer from '../img/movie1.png';

const Project = () => {
	return (
		<div className="text-center container p-1 ">
			<h1 className="large">Project</h1>
			<p className="lead">Few projects that I completed</p>
			<div className="grid-3 text-center ">
				<div className="project ">
					<img src={IZ} alt="" />
					<p>A Photography Website</p>
					<p>Gastby and SCSS </p>
					<a href="https://ijv.netlify.com">Website</a>
					<a href="https://github.com/Dayshawn21/IV2">GitHub</a>
				</div>
				<div className="project">
					<img src={barber} alt="" />
					<p>A Barbershop Website</p>
					<p>HTML and CSS </p>
					<a href="https://fadeking.netlify.com">Website</a>
					<a href="https://github.com/Dayshawn21/Fade-King">GitHub</a>
				</div>
				<div className="project">
					<img src={cont} alt="" />
					<p>A Conusulting Website</p>
					<p>HTML and CSS </p>
					<a href="https://bmconusulting.netlify.com">Website</a>
					<a href="https://github.com/Dayshawn21/Stock">GitHub</a>
				</div>
				<div className="project">
					<img src={timer} alt="" />
					<p>Movie Fight </p>
					<p>Javascript </p>
					<a href="https://frosty-williams-f6d042.netlify.com">Website</a>
					<a href="https://github.com/Dayshawn21/movie">GitHub</a>
				</div>
				<div className="project">
					<img src={player} alt="" />
					<p>An app were you can track the players on your team</p>
					<p>React </p>
					<a href="https://sportstracker12345.netlify.com/">Website</a>
					<a href="https://github.com/Dayshawn21/PlayerTracker">GitHub</a>
				</div>
				<div className="project">
					<img src={news} alt="" />
					<p>A Newsletter Website</p>
					<p>HTML and CSS </p>
					<a href="https://newlsetter.netlify.com/">Website</a>
					<a href="https://github.com/Dayshawn21/Newsletter">GitHub</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
