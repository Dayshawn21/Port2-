import React from 'react';

import PDF from '../img/dayresume.pdf';

const Header = () => {
	return (
		<div className="header-home text-center header-content">
			<div className="home-text">
				<h1>Dayshawn Terry</h1>
				<h2>Frontend Developer </h2>

				<div className="socialMedia">
					<a href="https://github.com/Dayshawn21">
						<i className="fab fa-github fa-5x" />
					</a>
					<a href="https://www.linkedin.com/in/dayshawn-terry">
						<i class="fab fa-linkedin fa-5x" />
					</a>
					<a href={PDF}>
						<i class="far fa-file-alt fa-5x" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
