import React from 'react';
import css from '../img/css.png';
import html from '../img/html.png';
import javascript from '../img/javascript.png';
import react from '../img/react.png';
import sass from '../img/sass.png';

const Skills = () => {
	return (
		<div className="container bg-light">
			<h1 className="large text-center">Skills</h1>
			<p className="lead text-center
      ">A few skills that I pick up on the way </p>
			<div className="icon">
				<img src={html} alt="" />
				<img src={css} alt="" />
				<img src={javascript} alt="" />
				<img src={react} alt="" />
				<img src={sass} alt="" />
			</div>
		</div>
	);
};

export default Skills;
