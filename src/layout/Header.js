import React from 'react';

import PDF from '../img/resume.pdf';

const Header = () => {
	return (
		<div className="header-home text-center header-content">
			<h1>Dayshawn Terry</h1>
			<h2>Frontend Developer </h2>
			<div className="m-2">
				<a href="/Project" className="btn btn-light">
					View my Work
				</a>
				<a href={PDF} className="btn btn-light">
					Resume
				</a>
			</div>
			<div className="socialMedia">
				<a href="https://github.com/Dayshawn21">
					<i className="fab fa-github fa-7x" />
				</a>
				<a href="www.linkedin.com/in/dayshawn-terry-4167a261">
					<i class="fab fa-linkedin fa-7x" />
				</a>
			</div>
		</div>
	);
};

export default Header;
