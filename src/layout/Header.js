import React from 'react';

import PDF from '../img/resume.pdf';

const Header = () => {
	return (
		<div className="header-home text-center header-content">
			<h1>Dayshawn Terry</h1>
			<h2>Frontend Developer </h2>

			<div className="socialMedia">
				<a href="https://github.com/Dayshawn21">
					<i className="fab fa-github fa-7x" />
				</a>
				<a href="https://www.linkedin.com/in/dayshawn-terry-4167a261/">
					<i class="fab fa-linkedin fa-7x" />
				</a>
				<a href={PDF}>
					<i class="far fa-file-alt fa-7x" />
				</a>
			</div>
		</div>
	);
};

export default Header;
