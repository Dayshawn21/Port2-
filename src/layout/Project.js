import React from 'react';
import IZ from '../img/Optimized-IZ.png';
import barber from '../img/Optimized-barber.png';
import cont from '../img/Optimized-cont.png';

const Project = () => {
	return (
		<div className="text-center container p-1 ">
			<h1 className="large">Project</h1>
			<p className="lead">Few projects that I completed</p>
			<div className="grid-3 ">
				<div className="project">
					<img src={IZ} alt="" />
					<a href="https://mystifying-joliot-6322b2.netlify.com/">Website</a>
					<a href="https://github.com/Dayshawn21/ISVis">GitHub</a>
				</div>
				<div className="project">
					<img src={barber} alt="" />
					<a href="https://pedantic-mestorf-0d5118.netlify.com/">Website</a>
					<a href="https://github.com/Dayshawn21/Fade-King">GitHub</a>
				</div>
				<div className="project">
					<img src={cont} alt="" />
					<a href="https://goofy-mayer-b4b348.netlify.com/">Website</a>
					<a href="https://github.com/Dayshawn21/Stock">GitHub</a>
				</div>
			</div>
		</div>
	);
};

export default Project;
